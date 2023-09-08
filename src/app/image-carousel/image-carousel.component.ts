import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'imagecarousel',
  exportAs: 'imagecarousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.scss'],
})
export class ImageCarousel {
  items = [{ title: 'Slide 1' }, { title: 'Slide 2' }, { title: 'Slide 3' }];
  images = [700, 800, 807].map((n) => `https://picsum.photos/id/${n}/900/500`);
  
  scrollList(direction: 'left' | 'right'): void {
    const container = document.querySelector('.scrollable-list');
    const scrollAmount = 200; // Puedes ajustar esta cantidad según tus necesidades

    if (container) {
      if (direction === 'left') {
        container.scrollLeft -= scrollAmount;
      } else {
        container.scrollLeft += scrollAmount;
      }
    }
  }
}
