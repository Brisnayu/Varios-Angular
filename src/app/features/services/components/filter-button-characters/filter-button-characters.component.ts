import { Component, inject, OnInit } from '@angular/core';
import { GetCharacters } from '../../../../core/services/getCharacters/getCharacters.service';
import { RootObject } from '../../../../core/interfaces/characters';
import { Character } from '../../../../core/interfaces/ICharacters';
import { FilterListPipe } from '../../../../shared/pipes/filterList/filter-list.pipe';

@Component({
  selector: 'app-filter-button-characters',
  templateUrl: './filter-button-characters.component.html',
  styleUrl: './filter-button-characters.component.scss'
})
export class FilterButtonCharactersComponent implements OnInit {
  private charactersService = inject(GetCharacters);
  private filterListPipe = new FilterListPipe();
  public listCharacters!: RootObject;
  public searchText: string = '';
  public filteredResults: Character[] = [];

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(): void {
    this.charactersService.getAllCharacters().subscribe(
      (characters) => { 
        console.log(characters), 
        this.listCharacters = characters;
        this.filteredResults = characters.results;
      })
  }

  filterCharacters(): void {
    if (this.listCharacters?.results) {
      this.filteredResults = this.filterListPipe.transform(this.listCharacters.results, this.searchText);
    } else {
      this.filteredResults = [];
    }
  }
}
