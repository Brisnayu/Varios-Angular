import { Component, inject, OnInit } from '@angular/core';
import { RootObject } from '../../../../core/interfaces/characters';
import { GetCharacters } from '../../../../core/services/getCharacters/getCharacters.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.scss'
})
export class CharactersComponent implements OnInit {
  private router = inject(Router);
  private charactersService = inject(GetCharacters);
  public listCharacters!: RootObject;

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(): void {
    this.charactersService.getAllCharacters().subscribe((characters) =>{this.listCharacters = characters})
  }

  goToCharacterId(id: number): void {
    console.log("hola", id)
    this.router.navigate([`services/characters/${id}`])
  }
}
