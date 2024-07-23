import { Component, inject, OnInit } from '@angular/core';
import { GetCharacters } from '../../../../core/services/getCharacters/getCharacters.service';
import { RootObject } from '../../../../core/interfaces/characters';

@Component({
  selector: 'app-filter-characters',
  templateUrl: './filter-characters.component.html',
  styleUrl: './filter-characters.component.scss'
})
export class FilterCharactersComponent implements OnInit {
  private charactersService = inject(GetCharacters)
  public listCharacters!: RootObject;
  public searchText: string = '';

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(): void {
    this.charactersService.getAllCharacters().subscribe((characters) => { console.log(characters), this.listCharacters = characters })
  }
}
