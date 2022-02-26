
const path = require('path');
const outputDir = path.resolve(__dirname, "./buildMocks");

module.exports = (env)=>({
    entry: `./mocks/microfrontends/${env.mockFile}`,
    output: {
      libraryTarget: "system",
      path:outputDir
    },
    devServer: {
      headers: {
          "Access-Control-Allow-Origin": "*",
      },
      allowedHosts: 'auto',
      static: {
        directory: outputDir,
      },
      compress: true,
      port: 5052,
    },
});
