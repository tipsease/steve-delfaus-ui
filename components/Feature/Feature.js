class Feature {
  constructor(element) {
    this.element = element;
    this.element.addEventListener('click', () => this.read());
  }

  // fade each feature out on click, also take out .middle-content if none left
  read() {
    TweenMax.to(this.element, 0.2, { opacity: 0, onComplete: () => {
      this.element.style.display = 'none'
      const features = Array.from(document.querySelectorAll('.feature')).filter(f => f.style.display !== 'none');
      if(features.length <= 0) {
        document.querySelector('.middle-content').style.display = 'none';
      }
    }});

  }
}

let features = Array.from(document.querySelectorAll('.feature')).map(f => new Feature(f));
