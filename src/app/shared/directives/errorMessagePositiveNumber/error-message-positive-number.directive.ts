import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[appErrorMessagePositiveNumber]'
})
export class ErrorMessagePositiveNumberDirective {
  @Input() max: number = 42;  // ESTE NÚMERO ES PORQUE ES EL MÁXIMO DE LA API DE RICK AND MORTY
  @Output() invalidNumber = new EventEmitter<string>();

  @HostListener('input', ['$event'])
  onInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const value = Number(inputElement.value);

    if (value > this.max) {
      this.invalidNumber.emit(`The number must be less than or equal to ${this.max}`);
    } else {
      this.invalidNumber.emit(''); 
    }
  }

}
