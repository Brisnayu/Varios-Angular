import { Component, inject, OnInit } from '@angular/core';
import { GetCharacters } from '../../../../core/services/getCharacters/getCharacters.service';
import { RootObject } from '../../../../core/interfaces/characters';

@Component({
  selector: 'app-pages-characters',
  templateUrl: './pages-characters.component.html',
  styleUrl: './pages-characters.component.scss'
})
export class PagesCharactersComponent implements OnInit {
  private charactersService = inject(GetCharacters);

  public characters!: RootObject;
  public currentPage: number = 1;
  public hasMore: boolean = true;

  ngOnInit(): void {
    this.loadCharacters(this.currentPage);
  }

  loadCharacters(page: number): void {
    if (this.hasMore) {
      this.charactersService.getCharacters(page).subscribe(data => {
        this.characters = data;
        this.currentPage = page;
        this.hasMore = data.info.next != null;
      });
    }
  }

  nextPage(): void {
    if (this.hasMore) {
      this.loadCharacters(this.currentPage + 1);
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.loadCharacters(this.currentPage - 1);
    }
  }
}
