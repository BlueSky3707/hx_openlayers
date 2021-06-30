module.exports = {
    publicPath: './',
    outputDir: 'hx-openlayers',
    chainWebpack: config => {
      
    },
    devServer: {
      // mode: 'hash',
      open: 'localhost:8086',
      host: '0.0.0.0',
      port: 8085,
      proxy: {
        '/api': {   
          target: 'http://localhost:8081',   
          changeOrigin: true,
          pathRewrite: {
            '^/api': ''
          }
        }
      }
    }
  }
  