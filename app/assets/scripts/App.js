/*-------------------------------------------------------------------------------*/
/* From webpack docs https://webpack.js.org/loaders/sass-loader/                 */
/*-------------------------------------------------------------------------------*/
import '../styles/styles.scss';

/*-------------------------------------------------------------------------------*/
/* MOBILE MENU                                                                   */
/*-------------------------------------------------------------------------------*/
import MobileMenu from './modules/MobileMenu.js';
const mobileMenu = new MobileMenu();

/*-------------------------------------------------------------------------------*/
/* STICKY HEADER FOR DESKTOP VERSION                                             */
/*-------------------------------------------------------------------------------*/
import StickyHeader from './modules/StickyHeader.js';
const stickyHeader = new StickyHeader();

/*-------------------------------------------------------------------------------*/
/* FEATURES SECTION - REVEAL ON SCROLL                                           */
/*-------------------------------------------------------------------------------*/
import RevealOnScroll from './modules/RevealOnScroll.js';
new RevealOnScroll(document.querySelectorAll('.feature-item'), 75);
new RevealOnScroll(document.querySelectorAll('.testimonial'), 60);

/*-------------------------------------------------------------------------------*/
/* WEBPACK DEV SERVER INJECTOR                                                   */
/*-------------------------------------------------------------------------------*/
if (module.hot) {
  module.hot.accept();
}
