import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImageCarousel, CallbackType } from './image-carousel.component';

describe('ImageCarouselComponent', () => {
  let component: ImageCarousel;
  let fixture: ComponentFixture<ImageCarousel>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageCarousel],
    });
    fixture = TestBed.createComponent(ImageCarousel);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should emit a callback when openReviewModal is called', () => {
    const callbackData = 'test data';
    let emittedData: string | undefined;

    component.miCallback.subscribe((data: CallbackType) => {
      emittedData = data(callbackData);
    });

    component.openReviewModal();

    expect(emittedData).toBe(callbackData);
  });

  // Add more tests for other component methods and behaviors as needed

  afterEach(() => {
    fixture.destroy();
  });
});