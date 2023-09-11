import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MultipleImage } from './multiple-image.component';

describe('MultipleImageComponent', () => {
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

  it('should initialize buttonLeft and buttonRight to true', () => {
    expect(component.buttonLeft).toBe(true);
    expect(component.buttonRight).toBe(false);
  });

  it('should emit "ALGOO" when emitAccion is called', () => {
    let emittedValue: string | undefined;
    component.callBack.subscribe((value) => (emittedValue = value));
    component.emitAccion();
    expect(emittedValue).toBe('ALGOO');
  });

  // You can add more tests for other methods and behaviors as needed
});