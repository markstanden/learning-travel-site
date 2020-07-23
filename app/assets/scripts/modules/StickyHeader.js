import throttle from 'lodash/throttle';
import debounce from 'lodash/debounce';

class StickyHeader {
  constructor() {
    this.siteHeader = document.getElementsByClassName('site-header')[0];
    this.pageSections = document.querySelectorAll('.page-section');
    this.browserHeight = window.innerHeight;
    this.previousScrollY = window.scrollY;
    this.events();
  } //constructor

  events() {
    window.addEventListener(
      'scroll',
      throttle(() => this.runOnScroll(), 200)
    ); //scroll events listener

    window.addEventListener(
      'resize',
      debounce(() => {
        this.browserHeight = window.innerHeight;
      }, 500)
    ); // resize events listener
  } //events

  runOnScroll() {
    //up or down?
    this.determineScrollDirection();

    // Check whether the page has been scrolled by more than 60px, if so darken the header bar
    if (window.scrollY > 60) {
      this.siteHeader.classList.add('site-header--dark');
    } else {
      this.siteHeader.classList.remove('site-header--dark');
    }

    // iterate the page sections, run calcSection to see whether it has been scrolled to
    this.pageSections.forEach(el => this.calcSection(el));
  } //runOnScroll

  determineScrollDirection() {
    if (window.scrollY > this.previousScrollY) {
      this.scrollingDown = true;
    } else {
      this.scrollingDown = false;
    }
    this.previousScrollY = window.scrollY;
  }

  calcSection(el) {
    if (
      //element is currently within the viewport
      // already scrolled + viewport height > distance to the top of the section
      window.scrollY + this.browserHeight > el.offsetTop &&
      // AND already scrolled < distance to the bottom of the section
      window.scrollY < el.offsetTop + el.offsetHeight
    ) {
      const scrollPercent = (el.getBoundingClientRect().y / this.browserHeight) * 100;
      if (
        (scrollPercent < 18 && scrollPercent > -0.1 && this.scrollingDown) ||
        (scrollPercent < 33 && !this.scrollingDown)
      ) {
        let matchingLink = el.getAttribute('data-matching-link');
        document
          .querySelectorAll(`.primary-nav a:not(${matchingLink})`)
          .forEach(el => el.classList.remove('is-current-link'));
        document.querySelector(matchingLink).classList.add('is-current-link');
      }
    }
  } //calcSection
} // StickyHeader

export default StickyHeader;
