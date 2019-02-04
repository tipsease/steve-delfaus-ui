class Feature {
  constructor(element) {
    this.element = element;
    this.element.addEventListener('click', () => this.read());
  }

  read() {
    // this.element.style.display = 'none';
    //
    TweenMax.to(this.element, 1, { opacity: 0, onComplete: () => this.element.style.display = 'none'});
  }
}

let features = Array.from(document.querySelectorAll(".feature")).map(f => new Feature(f));
