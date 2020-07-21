class RevealOnScroll {
  constructor() {
    this.itemsToReveal = document.querySelectorAll('.feature-item');
    this.hideInitially();
    this.events();
  }

  events() {
    window.addEventListener('scroll', () => {
      this.itemsToReveal.forEach(el => {
        this.calculateIfScrolledTo(el);
      });
    });
  }

  calculateIfScrolledTo(el) {
    
  }

  hideInitially() {
    this.itemsToReveal.forEach(el => el.classList.add('reveal-item'));
  }
}

export default RevealOnScroll;
