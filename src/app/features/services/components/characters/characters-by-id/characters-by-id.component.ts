import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetCharacters } from '../../../../../core/services/getCharacters/getCharacters.service';
import { Character } from '../../../../../core/interfaces/ICharacters';

@Component({
  selector: 'app-characters-by-id',
  templateUrl: './characters-by-id.component.html',
  styleUrl: './characters-by-id.component.scss'
})
export class CharactersByIdComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private characterService = inject(GetCharacters);
  public character: Character = { id: 0, name: '', image: '', species: '' };

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.characterService.getCharactersById(id).subscribe(data => {
      if (data) {
        this.character = data;
        console.log(data);
      } else {
        console.error('No data received or data is invalid.');
      }
    });
  }
}
