import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServiceFormSecondComponent } from './service-form-second.component';

describe('ServiceFormSecondComponent', () => {
  let component: ServiceFormSecondComponent;
  let fixture: ComponentFixture<ServiceFormSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceFormSecondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceFormSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
