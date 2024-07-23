import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivesRoutingModule } from './directives-routing.module';
import { DirectivesComponent } from './components/directives/directives.component';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormDirectiveComponent } from './components/form-directive/form-directive.component';



@NgModule({
  declarations: [
    DirectivesComponent,
    FormDirectiveComponent
  ],
  imports: [
    CommonModule,
    DirectivesRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DirectivesModule { }
