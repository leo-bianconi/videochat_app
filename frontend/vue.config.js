module.exports = {
  pages: {
    // 'index' : {
    // },
    signin: {
      entry: './src/pages/signin/main.js',
      template: 'public/index.html',
      title: 'Accesso',
      chunks: ['chunk-vendors', 'chunk-common', 'signin']
    }
  }
  // css: {
  //   loaderOptions: {
  //     sass: {
  //       data: `
  //         @import "./src/scss/globals.scss";
  //         @import "./src/scss/mixins.scss";
  //       `
  //     }
  //   }
  // }
};
