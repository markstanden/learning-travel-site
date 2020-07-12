/*
 * Created by following webpack documentation on:
 * https://webpack.js.org/concepts/
 */

/* needed for the output property */
const path = require('path');

module.exports = {
  /* By setting the mode parameter to either development, production or none, you can enable webpack's built-in optimizations that correspond to each environment. The default value is production. */
  mode: 'development',
  // mode: 'production',
  // mode: 'none',

  /*  An entry point indicates which module
  webpack should use to begin building
  out its internal dependency graph. 
  
  Add the following JS to the entry file below
  (change the import path to the 
    scss file containing the @import links):
  
        // From webpack docs
        // https://webpack.js.org/loaders/sass-loader/

        // Path to 'main' stylesheet
        import '../styles/styles.scss';

        // for hot swapping in the dev server
        if (module.hot) {
          module.hot.accept();
        }
  */
  entry: './app/assets/scripts/App.js',

  /*  The output property tells webpack where to
  emit the bundles it creates and how to name
  these files */
  output: {
    /* Needs to match HTML script tag
    <script src="bundle.js"></script> */
    path: path.resolve(__dirname, '/app'),
    filename: 'bundle.js',
  },

  /* Includes the tests and loaders for the tests */
  module: {
    rules: [
      /* "Hey webpack compiler, when you come across a path that resolves to a '.txt' file inside of a require()/import statement, use the raw-loader to transform it before you add it to the bundle." */
      {
        test: /\.txt$/,
        use: 'raw-loader',
      },

      /* From webpack docs
      https://webpack.js.org/loaders/sass-loader/

      Chain the sass-loader with the css-loader and
      the style-loader to immediately apply all
      styles to the DOM or the
      mini-css-extract-plugin 
      to extract it into a separate file. */
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',

          // Translates CSS into CommonJS
          'css-loader',

          // Use postcss autoprefixer plugin
          // to autoprefix the compiled sassy css.
          // autoprefixer plugin is added to
          // postcss.config.js
          'postcss-loader',

          // Compiles Sass to regular CSS
          'sass-loader',
        ],
      },
    ],
  },

  /* adds meta-data into the browser dev-tools
  to aid debugging */
  devtool: 'source-map',

  /* the environment in which the bundle should run
  changes chunk loading behavior and available modules */
  target: 'web',

  devServer: {
    before: function (app, server) {
      server._watch('./app/**/*.html');
    },
    contentBase: path.join(__dirname, 'app/'),
    compress: true,
    hot: true,
    port: 3000,
    host: '0.0.0.0',
    /* proxy: {
      // proxy URLs to backend development server
      '/api': 'http://localhost:3000',
    }, */
  },
};
