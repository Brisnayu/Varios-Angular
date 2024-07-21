import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPositiveNumber]'
})
export class PositiveNumberDirective {

  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event']) onInputChange(event: Event): void {
    const inputElement = this.el.nativeElement as HTMLInputElement;
    const initialValue = inputElement.value;

    inputElement.value = initialValue.replace(/[^0-9]*/g, '');

    if (initialValue !== inputElement.value) {
      event.stopPropagation();
    }
  }

}
