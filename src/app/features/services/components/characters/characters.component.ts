import { Component, inject, OnInit } from '@angular/core';
import { RootObject } from '../../../../core/interfaces/characters';
import { GetCharacters } from '../../../../core/services/getCharacters/getCharacters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.scss'
})
export class CharactersComponent implements OnInit {
  private charactersService = inject(GetCharacters)
  public listCharacters!: RootObject;

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(): void {
    this.charactersService.getAllCharacters().subscribe((characters) =>{console.log(characters), this.listCharacters = characters})
  }
}
