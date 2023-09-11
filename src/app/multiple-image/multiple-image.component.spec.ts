import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MultipleImage } from './multiple-image.component';

describe('ImageCarouselComponent', () => {
  let component: MultipleImage;
  let fixture: ComponentFixture<MultipleImage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultipleImage],
    });
    fixture = TestBed.createComponent(MultipleImage);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
  // Add more tests for other component methods and behaviors as needed

  afterEach(() => {
    fixture.destroy();
  });
});