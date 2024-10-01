import httpProxyMiddleware from 'next-http-proxy-middleware';

export const config = {
  runtime: 'nodejs',
  api: {
    externalResolver: true,
  },
};

export default async function handler(req, res) {
  console.log('Proxy request received:', req.method, req.url);

  return httpProxyMiddleware(req, res, {
    target: 'https://prod-useast-b.online.tableau.com',
    changeOrigin: true,
    secure: true,
    pathRewrite: {
      '^/api/proxy': '',
    },
    headers: {
      'Host': 'prod-useast-b.online.tableau.com',
      'X-Forwarded-Host': req.headers.host,
      'X-Real-IP': req.socket.remoteAddress,
      'X-Forwarded-Proto': req.headers['x-forwarded-proto'] || 'https',
    },
    onProxyReq: (proxyReq) => {
      proxyReq.removeHeader('x-forwarded-proto');
      proxyReq.removeHeader('x-forwarded-host');
      proxyReq.removeHeader('x-forwarded-for');
    },
    onProxyRes: (proxyRes, req, res) => {
      console.log('Proxy response received:', proxyRes.statusCode);

      const cookies = proxyRes.headers['set-cookie'];
      if (cookies) {
        const newCookies = cookies.map(cookie =>
          cookie.replace(/Domain=prod-useast-b\.online\.tableau\.com/gi, `Domain=${req.headers.host}`)
        );
        proxyRes.headers['set-cookie'] = newCookies;
      }
    },
  });
}
