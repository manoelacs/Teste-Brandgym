const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#007BFF',
                          '@menu-item-active-bg': '@primary-color',
                          '@font-family': 'Poppins, sans-serif',
                          '@theme': 'default'
          },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};