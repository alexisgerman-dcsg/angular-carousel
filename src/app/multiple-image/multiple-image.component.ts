import { Component, 
  ElementRef, 
  EventEmitter, 
  HostListener, 
  Input, 
  OnInit, 
  Output, 
  ViewChild } from '@angular/core';

@Component({
  selector: 'multipleImage',
  exportAs: 'multipleImage',
  templateUrl: './imultiple-image.component.html',
  styleUrls: ['./multiple-image.component.scss'],
})
export class MultipleImage implements OnInit {
  // EventEmitter for custom callback
  @Output() 
  callBack: EventEmitter<string> = new EventEmitter<string>();
  // Input property to provide an array of image URLs
  @Input() 
  images: string[] = [];
  // Reference to the scrollable list element in the template
  @ViewChild('scrollableList') scrollableList!: ElementRef;
 
  // Flags to control the visibility of left and right scroll buttons
  buttonLeft: boolean = true;
  buttonRight: boolean = false;
  
  constructor() {}

  ngOnInit(): void {
    // Initialize the component and check for horizontal scrolling
    this.verificarScrollHorizontal();
  }

  // Listen for window resize events and recheck for horizontal scrolling
  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.verificarScrollHorizontal();
  }

  // After the view is initialized, attach a scroll event listener
  ngAfterViewInit() {
    this.scrollableList.nativeElement.addEventListener('scroll', this.onScroll.bind(this));
  }

  // Check if the content is horizontally scrollable
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

  // Handle scroll events to control the visibility of scroll buttons
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
  
  // Emit a custom callback event (not implemented in the provided code)
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
    this.callBack.emit('ALGOO');
  }
}
