import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';

import { DirectivesModule } from './directives/directives.module';
import { CustomPipesModule } from './pipes/custom-pipes.module';
import { LoadingComponent } from './components/loading/loading.component';


@NgModule({
  declarations: [
    ButtonComponent,
    CardComponent,
    LoadingComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ButtonComponent,
    CardComponent,
    DirectivesModule,
    CustomPipesModule,
    LoadingComponent
  ]
})
export class SharedModule { }
