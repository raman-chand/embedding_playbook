import { NextResponse } from "next/server";
import httpProxyMiddleware from 'next-http-proxy-middleware';

export const runtime = "nodejs";

export async function GET(req) {
  return handleProxy(req);
}

export async function POST(req) {
  return handleProxy(req);
}

async function handleProxy(req) {
  console.log('Proxy request received:', req.method, req.url);

  const res = await httpProxyMiddleware(req, {
    target: 'https://prod-useast-b.online.tableau.com',
    changeOrigin: true,
    secure: true,
    pathRewrite: {
      '^/api/proxy': '',
    },
    headers: {
      'Host': 'prod-useast-b.online.tableau.com',
      'X-Forwarded-Host': req.headers.get('host'),
      'X-Real-IP': req.ip,
      'X-Forwarded-Proto': req.headers.get('x-forwarded-proto') || 'https',
    },
    onProxyReq: (proxyReq) => {
      proxyReq.removeHeader('x-forwarded-proto');
      proxyReq.removeHeader('x-forwarded-host');
      proxyReq.removeHeader('x-forwarded-for');
    },
    onProxyRes: (proxyRes) => {
      console.log('Proxy response received:', proxyRes.statusCode);

      const cookies = proxyRes.headers.get('set-cookie');
      if (cookies) {
        const newCookies = cookies.map(cookie =>
          cookie.replace(/Domain=prod-useast-b\.online\.tableau\.com/gi, `Domain=${req.headers.get('host')}`)
        );
        proxyRes.headers.set('set-cookie', newCookies);
      }
    },
  });

  return NextResponse.json(res);
}
