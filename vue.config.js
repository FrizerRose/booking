// Vue.config.js configuration options
module.exports = {
  // restart dev server to apply changes
  pwa: {
    name: 'Dolazim.hr',
    themeColor: '#fcfcf9',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    manifestPath: './img/icons/site.webmanifest',

    // // configure the workbox plugin
    // workboxPluginMode: 'InjectManifest',
    // workboxOptions: {
    //   // swSrc is required in InjectManifest mode.
    //   swSrc: 'dev/sw.js',
    //   // ...other Workbox options...
    // },
  },
};
