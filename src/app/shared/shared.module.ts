import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';

import { DirectivesModule } from './directives/directives.module';
import { CustomPipesModule } from './pipes/custom-pipes.module';


@NgModule({
  declarations: [
    ButtonComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ButtonComponent,
    CardComponent,
    DirectivesModule,
    CustomPipesModule,

  ]
})
export class SharedModule { }
