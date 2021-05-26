import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormSecondComponent } from './form-second.component';

describe('FormSecondComponent', () => {
  let component: FormSecondComponent;
  let fixture: ComponentFixture<FormSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSecondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
