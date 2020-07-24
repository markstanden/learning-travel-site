/*-------------------------------------------------------------------------------*/
/* From webpack docs https://webpack.js.org/loaders/sass-loader/                 */
/*-------------------------------------------------------------------------------*/
import '../styles/styles.scss';

/*-------------------------------------------------------------------------------*/
/* MOBILE MENU                                                                   */
/*-------------------------------------------------------------------------------*/
import MobileMenu from './modules/MobileMenu.js';
new MobileMenu();

/*-------------------------------------------------------------------------------*/
/* STICKY HEADER FOR DESKTOP VERSION                                             */
/*-------------------------------------------------------------------------------*/
import StickyHeader from './modules/StickyHeader.js';
new StickyHeader();

/*-------------------------------------------------------------------------------*/
/* FEATURES SECTION - REVEAL ON SCROLL                                           */
/*-------------------------------------------------------------------------------*/
import RevealOnScroll from './modules/RevealOnScroll.js';
new RevealOnScroll(document.querySelectorAll('.feature-item'), 75);
new RevealOnScroll(document.querySelectorAll('.testimonial'), 60);

/*-------------------------------------------------------------------------------*/
/* MODAL - GET IN TOUCH                                                          */
/*-------------------------------------------------------------------------------*/
/* import Modal from './modules/Modal.js';
new Modal(); */
let modal;
document.querySelectorAll('.open-modal').forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault();
    if (!modal) {
      import(/* webpackChunkName: "modal" */ './modules/Modal.js')
        .then(x => {
          modal = new x.default();
          setTimeout(() => modal.openTheModal(), 20);
        })
        .catch(() => console.log(`problem loading Modal.js`));
    } else {
      modal.openTheModal();
    }
  });
});
/*-------------------------------------------------------------------------------*/
/* WEBPACK DEV SERVER INJECTOR                                                   */
/*-------------------------------------------------------------------------------*/
if (module.hot) {
  module.hot.accept();
}
