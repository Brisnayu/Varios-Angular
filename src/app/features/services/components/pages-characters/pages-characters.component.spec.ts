import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesCharactersComponent } from './pages-characters.component';

describe('PagesCharactersComponent', () => {
  let component: PagesCharactersComponent;
  let fixture: ComponentFixture<PagesCharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PagesCharactersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
