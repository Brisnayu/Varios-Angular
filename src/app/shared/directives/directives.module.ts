import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HoverElementDirective } from './hoverElement/hover-element.directive';
import { ClickBackgroundDirective } from './clickBackground/click-background.directive';
import { PositiveNumberDirective } from './positiveNumber/positive-number.directive';
import { ChangeTextDirective } from './changeText/change-text.directive';
import { GradientColorDirective } from './gradientColor/gradient-color.directive';
import { HighlighDirective } from './highligh/highligh.directive';
import { HighlightElementsDirective } from './highlightElements/highlight-elements.directive';
import { HighlightOnClickDirective } from './highlightOnClick/highlight-on-click.directive';
import { ShowHideDirective } from './showHide/show-hide.directive';
import { PasswordLengthDirective } from './PasswordLength/password-length.directive';
import { ErrorsInputDirective } from './errorsInput/errors-input.directive';
import { ErrorMessageDirective } from './errorMessage/error-message.directive';
import { ErrorMessagePositiveNumberDirective } from './errorMessagePositiveNumber/error-message-positive-number.directive';
import { ButtonHoverDirective } from './buttonHover/button-hover.directive';
import { TrucatedTextDirective } from './trucatedText/trucated-text.directive';



@NgModule({
  declarations: [
    HoverElementDirective,
    ClickBackgroundDirective,
    HighlighDirective,
    PositiveNumberDirective,
    ShowHideDirective,
    ChangeTextDirective,
    GradientColorDirective,
    HighlightOnClickDirective,
    HighlightElementsDirective,
    PasswordLengthDirective,
    ErrorsInputDirective,
    ErrorMessageDirective,
    ErrorMessagePositiveNumberDirective,
    ButtonHoverDirective,
    TrucatedTextDirective,
  ],
  imports: [
    CommonModule,
  ], 
  exports: [
    HoverElementDirective,
    ClickBackgroundDirective,
    HighlighDirective,
    PositiveNumberDirective,
    ShowHideDirective,
    ChangeTextDirective,
    GradientColorDirective,
    HighlightOnClickDirective,
    HighlightElementsDirective,
    PasswordLengthDirective,
    ErrorsInputDirective,
    ErrorMessageDirective,
    ErrorMessagePositiveNumberDirective,
    ButtonHoverDirective,
    TrucatedTextDirective
  ]
})
export class DirectivesModule { }