import { Component, HostListener, inject, OnInit } from '@angular/core';
import { GetCharacters } from '../../../../core/services/getCharacters/getCharacters.service';
import { RootObject } from '../../../../core/interfaces/characters';

@Component({
  selector: 'app-characters-scroll',
  templateUrl: './characters-scroll.component.html',
  styleUrl: './characters-scroll.component.scss'
})
export class CharactersScrollComponent implements OnInit {
  private charactersService = inject(GetCharacters);
  public listCharacters!: RootObject;
  pageNumber: number = 1

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(): void {

    this.charactersService.getCharactersScroll(this.pageNumber).subscribe(
      (characters) => { 
        if(this.pageNumber === 1) this.listCharacters = characters;
        else characters.results.forEach(result => this.listCharacters.results.push(result))
      })
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {
    // let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
    // EL 744 es por los padding o los margin que están en el SCSS, tomar en cuenta!!!
    let pos = (document.documentElement.scrollTop || document.body.scrollTop) + 744;
    let max = document.documentElement.scrollHeight;


    console.log('POS', pos)
    console.log('MAX', max)

    if(pos >= max )  {
      console.log('ESTOY TOCANDO EL BOTÓN')

      this.pageNumber += 1;
      this.getCharacters();

    }
  }
}
