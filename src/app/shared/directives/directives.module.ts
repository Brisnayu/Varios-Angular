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
  ]
})
export class DirectivesModule { }