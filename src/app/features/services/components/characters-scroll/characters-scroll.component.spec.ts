import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersScrollComponent } from './characters-scroll.component';

describe('CharactersScrollComponent', () => {
  let component: CharactersScrollComponent;
  let fixture: ComponentFixture<CharactersScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharactersScrollComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharactersScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
