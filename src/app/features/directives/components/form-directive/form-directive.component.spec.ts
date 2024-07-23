import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDirectiveComponent } from './form-directive.component';

describe('FormDirectiveComponent', () => {
  let component: FormDirectiveComponent;
  let fixture: ComponentFixture<FormDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormDirectiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
