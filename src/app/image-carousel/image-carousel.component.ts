import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';


export interface CallbackType {
  (data: string): void;
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'imagecarousel',
  exportAs: 'imagecarousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.scss'],
})
export class ImageCarousel implements OnInit {

  @Output() 
  miCallback: EventEmitter<CallbackType> = new EventEmitter<CallbackType>();
  @Input() 
  images: string[] = [];
  @ViewChild('scrollableList') scrollableList!: ElementRef;

  buttonLeft: boolean = true;
  buttonRight: boolean = false;
  
  constructor() {}

  ngOnInit(): void {
    this.verificarScrollHorizontal();
  }

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
      this.buttonLeft = false;
      this.buttonRight = true;
      return;
    } 
    this.buttonLeft = false;
    this.buttonRight = false;
  }

  onScroll(event: Event) {
    const scrollableList = event.target as HTMLElement;
    if (scrollableList.scrollLeft === 0) {
      this.buttonLeft = false;
      this.buttonRight = true;
    }
    if (scrollableList.scrollLeft + scrollableList.clientWidth >= scrollableList.scrollWidth) {
      this.buttonLeft = true;
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
    this.miCallback.emit((data: string) => {
      
    });
  }
}
