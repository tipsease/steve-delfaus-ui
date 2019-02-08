class MenuButton {
  constructor(element) {
    this.element = element;
    this.shown = false;
    this.menu = document.querySelector('.nav-panel');
    this.slideWrapper = document.querySelector('.slide-wrapper');
    this.element.addEventListener('click', e => this.toggleMenu(e));
    this.hideMenu = this.hideMenu.bind(this);
  }

  hideMenu() {
    this.menu.classList.add('menu-hidden');
    this.slideWrapper.classList.add('menu-hidden');
    this.shown = false;
  }

  showMenu() {
    this.menu.classList.remove('menu-hidden');
    this.slideWrapper.classList.remove('menu-hidden');
    this.shown = true;
  }

  toggleMenu(e) {
    e.stopPropagation();
    if(this.shown) {
      this.slideWrapper.removeEventListener('click', this.hideMenu);
      this.hideMenu();
    } else {
      this.slideWrapper.addEventListener('click', this.hideMenu);
      this.showMenu();
    }
  }
}

let menuButton = new MenuButton(document.querySelector('.menu-button'));
