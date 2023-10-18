class Carousel {
    constructor(element) {
      this.container = element.querySelector('.container-slider__slider');
      this.currentIndex = 0;
      this.items = this.container.querySelectorAll('img');
      this.totalItems = this.items.length;
  
      this.nextButton = element.querySelector('.button--right');
      this.prevButton = element.querySelector('.button--left');
  
      this.nextButton.addEventListener('click', () => this.nextSlide());
      this.prevButton.addEventListener('click', () => this.prevSlide());
  
      // Ensure initial state is set
      this.update();
    }
  
    nextSlide() {
      this.currentIndex++;
      if (this.currentIndex >= this.totalItems) {
        this.currentIndex = 0;
      }
      this.update();
    }
  
    prevSlide() {
      this.currentIndex--;
      if (this.currentIndex < 0) {
        this.currentIndex = this.totalItems - 1;
      }
      this.update();
    }
  
    update() {
      const offset = -(this.currentIndex * 100);
      this.container.style.transform = `translateX(${offset}%)`;
    }
  }
  
  // Initialize carousel for the given element
  new Carousel(document.querySelector('.container-slider'));
  