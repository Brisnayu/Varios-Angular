import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './components/services/services.component';
import { LoginComponent } from './components/login/login.component';
import { CharactersComponent } from './components/characters/characters.component';
import { SharedModule } from '../../shared/shared.module';
import { PagesCharactersComponent } from './components/pages-characters/pages-characters.component';
import { CharactersNumberPageComponent } from './components/characters-number-page/characters-number-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterCharactersComponent } from './components/filter-characters/filter-characters.component';
import { FilterButtonCharactersComponent } from './components/filter-button-characters/filter-button-characters.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CharactersByIdComponent } from './components/characters/characters-by-id/characters-by-id.component';
import { MaintenanceComponent } from './components/maintenance/maintenance.component';


@NgModule({
  declarations: [
    ServicesComponent,
    LoginComponent,
    CharactersComponent,
    PagesCharactersComponent,
    CharactersNumberPageComponent,
    FilterCharactersComponent,
    FilterButtonCharactersComponent,
    NotFoundComponent,
    CharactersByIdComponent,
    MaintenanceComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ServicesModule { }
