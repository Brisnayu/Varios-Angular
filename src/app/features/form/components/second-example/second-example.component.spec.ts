import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondExampleComponent } from './second-example.component';

describe('SecondExampleComponent', () => {
  let component: SecondExampleComponent;
  let fixture: ComponentFixture<SecondExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecondExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
