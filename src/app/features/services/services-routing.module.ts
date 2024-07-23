import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './components/services/services.component';
import { CharactersComponent } from './components/characters/characters.component';
import { PagesCharactersComponent } from './components/pages-characters/pages-characters.component';
import { CharactersNumberPageComponent } from './components/characters-number-page/characters-number-page.component';
import { FilterCharactersComponent } from './components/filter-characters/filter-characters.component';
import { FilterButtonCharactersComponent } from './components/filter-button-characters/filter-button-characters.component';
import { CharactersByIdComponent } from './components/characters/characters-by-id/characters-by-id.component';
import { canActivateCharacter } from '../../core/guards/DataGuard/DataCharacterId.guard';
import { maintenanceGuard } from '../../core/guards/MaintenanceGuard/Maintenance.guard';
import { LoginComponent } from './components/login/login.component';
import { unsavedChangesGuard } from '../../core/guards/unSavedChanges/unSavedChanges.guard';

const routes: Routes = [
  { path: '', component: ServicesComponent },
  { path: 'login', component: LoginComponent, canDeactivate: [unsavedChangesGuard] },
  { path: 'characters', component: CharactersComponent },
  { path: 'characters/:id', component: CharactersByIdComponent, canActivate: [canActivateCharacter] },
  { path: 'pagesCharacters', component: PagesCharactersComponent },
  { path: 'numberCharacters', component: CharactersNumberPageComponent, canActivate: [maintenanceGuard] },
  { path: 'filterCharacters', component: FilterCharactersComponent },
  { path: 'filterButtonCharacters', component: FilterButtonCharactersComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
