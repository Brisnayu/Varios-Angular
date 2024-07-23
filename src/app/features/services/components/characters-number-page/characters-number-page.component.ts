import { Component, inject } from '@angular/core';
import { Character } from '../../../../core/interfaces/ICharacters';
import { GetCharacters } from '../../../../core/services/getCharacters/getCharacters.service';

@Component({
  selector: 'app-characters-number-page',
  templateUrl: './characters-number-page.component.html',
  styleUrl: './characters-number-page.component.scss'
})
export class CharactersNumberPageComponent {
  private charactersService = inject(GetCharacters);

  public characters: Character[] = [];
  public pageNumber: number = 1;
  public hasMore: boolean = true;
  public errorMessage: string = '';

  ngOnInit(): void {
    this.loadCharacters(this.pageNumber);
  }

  loadCharacters(page: number): void {
    this.charactersService.getCharactersNumberPage(page).subscribe(characters => {
      this.characters = characters;
      this.pageNumber = page;
      this.errorMessage = '';
    }, error => {
      this.errorMessage = 'Error fetching characters', error;
    });
  }

  onPageChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const page = Number(inputElement.value);
    
    if (page && page > 0) {
      this.loadCharacters(page);
    }
  }

  handleInvalidNumber(message: string): void {
    this.errorMessage = message;
  }
}
