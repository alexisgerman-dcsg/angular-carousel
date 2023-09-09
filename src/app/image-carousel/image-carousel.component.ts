import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'imagecarousel',
  exportAs: 'imagecarousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.scss'],
})
export class ImageCarousel {
  images = [700, 800, 807].map((n) => `https://picsum.photos/id/${n}/900/500`);
  buttonLeft: boolean = false;
  buttonRight: boolean = true;
  scrollAvailable: boolean = false;
  @ViewChild('scrollableList') scrollableList!: ElementRef;

  ngAfterViewInit() {
    const scrollableList = this.scrollableList.nativeElement;
    if (scrollableList.scrollWidth > scrollableList.clientWidth) {
      scrollableList.addEventListener('scroll', this.onScroll.bind(this));
      this.scrollAvailable = true;
    }
  }

  onScroll(event: Event) {
    const scrollableList = event.target as HTMLElement;

    if (scrollableList.scrollWidth > scrollableList.clientWidth) {
      console.log('Scrool hidden')
    }
    if (scrollableList.scrollLeft === 0) {
      console.log('Estás en la posición inicial.');
      this.buttonLeft = true;
    }
    if (scrollableList.scrollLeft + scrollableList.clientWidth >= scrollableList.scrollWidth) {
      console.log('Estás en la posición final.');
      this.buttonRight = false;
    }
  }


  scrollList(direction: 'left' | 'right'): void {
    const container = document.querySelector('.scrollable-list');
    const scrollAmount = 200;

    if (container) {
      if (direction === 'left') {
        container.scrollLeft -= scrollAmount;
      } else {
        container.scrollLeft += scrollAmount;
      }
    }
  }

  openReviewModal() {
    alert('Hellow')
  }
}
