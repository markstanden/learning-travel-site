/* postcss.config.js */

module.exports = {
  /*
    AUTOPREFIXER
    
    add to package.json to configure behaviour:
    ( https://github.com/postcss/autoprefixer )
    ( https://github.com/browserslist/browserslist#queries )

    "browserslist": [
    "last 5 version",
    "> 0.5%",
    "IE 11"

  ] */
  plugins: [require('autoprefixer')],
};
