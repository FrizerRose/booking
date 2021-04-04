// Vue.config.js configuration options
module.exports = {
  // restart dev server to apply changes
  pwa: {
    name: 'Dolazim.hr',
    themeColor: '#ffffff',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    manifestPath: './img/icons/site.webmanifest',

    // configure the workbox plugin
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: './sw.js',
      // ...other Workbox options...
    },
  },
};
