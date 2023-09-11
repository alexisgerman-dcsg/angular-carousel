import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'imagecarousel',
  exportAs: 'imagecarousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.scss'],
})
export class ImageCarousel {
  images = ['https://photos-uat-us.bazaarvoice.com/photo/2/cGhvdG86Y29uY2llcmdlYXBpZG9jdW1lbnRhdGlvbg/f918b4d7-4a7a-530a-8110-a79b23718ee0', 'https://photos-uat-us.bazaarvoice.com/photo/2/cGhvdG86Y29uY2llcmdlYXBpZG9jdW1lbnRhdGlvbg/be9256eb-24d7-5b03-b0ec-5c0b9232b3b5', 'https://photos-uat-us.bazaarvoice.com/photo/2/cGhvdG86Y29uY2llcmdlYXBpZG9jdW1lbnRhdGlvbg/f918b4d7-4a7a-530a-8110-a79b23718ee0', 'https://photos-uat-us.bazaarvoice.com/photo/2/cGhvdG86Y29uY2llcmdlYXBpZG9jdW1lbnRhdGlvbg/f918b4d7-4a7a-530a-8110-a79b23718ee0', 'https://photos-uat-us.bazaarvoice.com/photo/2/cGhvdG86Y29uY2llcmdlYXBpZG9jdW1lbnRhdGlvbg/f918b4d7-4a7a-530a-8110-a79b23718ee0']
  
  buttonLeft: boolean = true;
  buttonRight: boolean = false;
  @ViewChild('scrollableList') scrollableList!: ElementRef;
  
  constructor() {}

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.verificarScrollHorizontal();
  }

  ngAfterViewInit() {
    this.scrollableList.nativeElement.addEventListener('scroll', this.onScroll.bind(this));
  }

  verificarScrollHorizontal() {
    const elemento = this.scrollableList.nativeElement;
    if (elemento.scrollWidth > elemento.clientWidth) {
      this.buttonLeft = true;
      this.buttonRight = true;
    } else {
      this.buttonLeft = true;
      this.buttonRight = true;
    }
  }

  onScroll(event: Event) {
    const scrollableList = event.target as HTMLElement;

    // Si el scroll llega al principio
    if (scrollableList.scrollLeft === 0) {
      this.buttonLeft = true;
      this.buttonRight = false;
      // Puedes ejecutar acciones específicas aquí
    }

    // Si el scroll llega al final
    if (scrollableList.scrollLeft + scrollableList.clientWidth >= scrollableList.scrollWidth) {
      this.buttonLeft = false;
      this.buttonRight = true;
      console.log('Estás en la posición final.');
      // Puedes ejecutar acciones específicas aquí
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
