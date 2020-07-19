class MobileMenu {
  constructor() {
    this.menuIcon = document.getElementsByClassName('site-header__menu-icon')[0];
    this.menuContent = document.getElementsByClassName('site-header__menu-content')[0];
    this.siteHeader = document.getElementsByClassName('site-header')[0];
    this.events();
  }

  events() {
    this.menuIcon.addEventListener('click', () => this.toggleTheMenu());
  }

  toggleTheMenu() {
    this.menuContent.classList.toggle('site-header__menu-content--is-visible');
    this.siteHeader.classList.toggle('site-header--is-expanded');
    this.menuIcon.classList.toggle('site-header__menu-icon--close-x');
  }
}

export default MobileMenu;
