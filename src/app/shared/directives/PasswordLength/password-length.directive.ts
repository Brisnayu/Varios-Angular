import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPasswordLength]'
})
export class PasswordLengthDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input') onInput() {
    const inputLength = this.el.nativeElement.value.length;
    if (inputLength < 5) {
      this.el.nativeElement.style.backgroundColor = 'red';
    } else if (inputLength >= 5 && inputLength <= 10) {
      this.el.nativeElement.style.backgroundColor = 'green';
    } else {
      this.el.nativeElement.style.backgroundColor = 'purple';
    }
  }

}
