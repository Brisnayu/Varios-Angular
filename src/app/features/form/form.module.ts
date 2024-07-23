import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './components/form/form.component';
import { FirstExampleComponent } from './components/first-example/first-example.component';
import { SecondExampleComponent } from './components/second-example/second-example.component';
import { SubscriptionFormComponent } from './components/subscription-form/subscription-form.component';
import { AvatarFormComponent } from './components/avatar-form/avatar-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SimpleFormComponent } from './components/simple-form/simple-form.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    FormComponent,
    FirstExampleComponent,
    SecondExampleComponent,
    SubscriptionFormComponent,
    AvatarFormComponent,
    SimpleFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormRoutingModule,
    SharedModule
  ]
})
export class FormModule { }
