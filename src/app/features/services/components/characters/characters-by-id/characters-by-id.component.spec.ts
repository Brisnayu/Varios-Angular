import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersByIdComponent } from './characters-by-id.component';

describe('CharactersByIdComponent', () => {
  let component: CharactersByIdComponent;
  let fixture: ComponentFixture<CharactersByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharactersByIdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharactersByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
