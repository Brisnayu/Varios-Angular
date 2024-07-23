import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './components/services/services.component';
import { CharactersComponent } from './components/characters/characters.component';
import { PagesCharactersComponent } from './components/pages-characters/pages-characters.component';
import { CharactersNumberPageComponent } from './components/characters-number-page/characters-number-page.component';
import { FilterCharactersComponent } from './components/filter-characters/filter-characters.component';

const routes: Routes = [
  { path: '', component: ServicesComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'pagesCharacters', component: PagesCharactersComponent },
  { path: 'numberCharacters', component: CharactersNumberPageComponent},
  { path: 'filterCharacters', component: FilterCharactersComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
