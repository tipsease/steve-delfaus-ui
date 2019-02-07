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
      TweenMax.to([this.slideWrapper, this.menu], 0.5, { x: 0, onComplete: () => {
        this.menu.classList.add('menu-hidden');
        this.shown = false;
      }});
    } else {
      this.menu.classList.remove('menu-hidden');
      this.shown = true;
      TweenMax.to([this.slideWrapper, this.menu], 0.5, { x: 200 });
    }

  }
}

let menuButton = new MenuButton(document.querySelector('.menu-button'));
