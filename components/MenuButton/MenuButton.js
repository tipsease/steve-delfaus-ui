class MenuButton {
  constructor(element) {
    this.element = element;
    this.shown = false;
    this.menu = document.querySelector('.nav-panel');
    this.slideWrapper = document.querySelector('.slide-wrapper');
    this.element.addEventListener('click', () => this.toggleMenu());
  }

  toggleMenu() {
    if(this.shown) {
      this.menu.classList.add('menu-hidden');
      this.slideWrapper.classList.add('menu-hidden');
      this.shown = false;
    } else {
      this.menu.classList.remove('menu-hidden');
      this.slideWrapper.classList.remove('menu-hidden');
      this.shown = true;
    }
  }
}

let menuButton = new MenuButton(document.querySelector('.menu-button'));
