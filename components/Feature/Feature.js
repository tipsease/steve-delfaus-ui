class Feature {
  constructor(element) {
    this.element = element;
    this.element.addEventListener('click', () => this.read());
  }

  read() {
    TweenMax.to(this.element, 1, { opacity: 0, onComplete: () => {
      this.element.style.display = 'none'
      const features = Array.from(document.querySelectorAll('.feature'), (f) => {
        const computedStyle = window.getComputedStyle(f);
        console.log(computedStyle);
        if(computedStyle.display === 'none') {
          return false;
        } else {
          return true;
        }
      });
      if(features.length - 1 <= 0) {
        document.querySelector('.middle-content').style.display = 'none';
      }
    }});

  }
}

let features = Array.from(document.querySelectorAll('.feature')).map(f => new Feature(f));
