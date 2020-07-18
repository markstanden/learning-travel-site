class MobileMenu {
  constructor() {
    this.menuIcon = document.getElementsByClassName('site-header__menu-icon')[0];
    this.menuContent = document.getElementsByClassName('site-header__menu-content')[0];
    this.events();
  }

  events() {
    this.menuIcon.addEventListener('click', () => this.toggleTheMenu());
  }

  toggleTheMenu() {
    this.menuContent.classList.toggle('site-header__menu-content--is-visible');
  }
}

export default MobileMenu;
