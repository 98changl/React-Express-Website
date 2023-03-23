const { createProxyMiddleware } = require('http-proxy-middleware');
const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(createProxyMiddleware('/*', { target: 'http://localhost:3001' }));
    app.use(createProxyMiddleware('/*', { target: 'https://limanchangnode.onrender.com', changeOrigin: true }));
}