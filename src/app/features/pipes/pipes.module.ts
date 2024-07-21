import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesRoutingModule } from './pipes-routing.module';
import { PipesComponent } from './components/pipes/pipes.component';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PipesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PipesRoutingModule,
    SharedModule,
  ]
})
export class PipesModule { }
