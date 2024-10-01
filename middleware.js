import httpProxyMiddleware from 'next-http-proxy-middleware';

const isDevelopment = process.env.NODE_ENV !== 'production';

export const config = {
    api: {
        // Enable external resolver for proper handling of requests
        externalResolver: true,
    },
};

export default async (req, res) => {
    // Log the incoming request
    console.log('Proxy request received:', req.method, req.url);

    // Set up the proxy middleware
    return httpProxyMiddleware(req, res, {
        target: 'https://prod-useast-b.online.tableau.com', // Tableau target URL
        changeOrigin: true,
        secure: true,
        pathRewrite: {
            '^/api/proxy': '', // Remove the /api/proxy path prefix
        },
        cookieDomainRewrite: '',
        onProxyReq: (proxyReq) => {
            // Remove X-Forwarded headers for security
            proxyReq.removeHeader('x-forwarded-proto');
            proxyReq.removeHeader('x-forwarded-host');
            proxyReq.removeHeader('x-forwarded-for');
        },
        onProxyRes: (proxyRes) => {
            console.log('Proxy response received:', proxyRes.statusCode);
        },
    });
};
