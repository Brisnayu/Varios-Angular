import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterButtonCharactersComponent } from './filter-button-characters.component';

describe('FilterButtonCharactersComponent', () => {
  let component: FilterButtonCharactersComponent;
  let fixture: ComponentFixture<FilterButtonCharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilterButtonCharactersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterButtonCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
