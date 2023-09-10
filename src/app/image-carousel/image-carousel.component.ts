import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'imagecarousel',
  exportAs: 'imagecarousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.scss'],
})
export class ImageCarousel {
  images = [700, 800, 807].map((n) => `https://picsum.photos/id/${n}/900/500`);
  
  buttonLeft: boolean = true;
  buttonRight: boolean = false;
  @ViewChild('scrollableList') scrollableList!: ElementRef;

  constructor() {}

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    // Aquí puedes realizar acciones cuando cambie el tamaño de la pantalla
    // event.target contiene la ventana (window) que cambió de tamaño
    console.log('La pantalla cambió de tamaño.');
    console.log(this.isHorizontalScrollAvailable())

  }

  ngAfterViewInit() {
    // Establece el HostListener en el elemento con la ID #scrollableList
    this.scrollableList.nativeElement.addEventListener('scroll', this.onScroll.bind(this));
    setTimeout(() => {
      console.log(this.isHorizontalScrollAvailable())
      if (this.isHorizontalScrollAvailable()) {
        this.buttonLeft = true;
        this.buttonRight = true;
      }
    });
    
  }

  onScroll(event: Event) {
    const scrollableList = event.target as HTMLElement;

    // Si el scroll llega al principio
    if (scrollableList.scrollLeft === 0) {
      this.buttonLeft = true;
      this.buttonRight = false;
      console.log('Estás en la posición inicial.');
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

  isHorizontalScrollAvailable() {
    const element = document.getElementById('scrollableList');
    console.log(element);
    if (element) {
      // Verificar si el scroll horizontal está disponible
      return element.scrollWidth > element.clientWidth;
    } else {
      // El elemento con el ID especificado no se encontró en el DOM
      return false;
    }
  }

  openReviewModal() {
    alert('Hellow')
  }
}
