// Vue.config.js configuration options
module.exports = {
  // restart dev server to apply changes
  pwa: {
    name: 'booking app',
    themeColor: '#fcfcf9',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',

    // // configure the workbox plugin
    // workboxPluginMode: 'InjectManifest',
    // workboxOptions: {
    //   // swSrc is required in InjectManifest mode.
    //   swSrc: 'dev/sw.js',
    //   // ...other Workbox options...
    // },
  },
};
