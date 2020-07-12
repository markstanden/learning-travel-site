/* 
From webpack docs
https://webpack.js.org/loaders/sass-loader/
*/
import '../styles/styles.scss';

if (module.hot) {
  module.hot.accept();
}
