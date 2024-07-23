import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersNumberPageComponent } from './characters-number-page.component';

describe('CharactersNumberPageComponent', () => {
  let component: CharactersNumberPageComponent;
  let fixture: ComponentFixture<CharactersNumberPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharactersNumberPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharactersNumberPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
