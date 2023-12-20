const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api', 
    createProxyMiddleware({
      target: 'https://1082-37-214-67-103.ngrok-free.app',
      changeOrigin: true,
    })
  );
};