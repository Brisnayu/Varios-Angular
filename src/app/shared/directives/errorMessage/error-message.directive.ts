import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appErrorMessage]'
})
export class ErrorMessageDirective implements OnChanges {

  @Input('appErrorMessage') errors: { [key: string]: any } | null | undefined = null;
  @Input() field: string = '';

  constructor(private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['errors'] || changes['field']) {
      this.updateErrorMessage();
    }
  }

  private updateErrorMessage() {
    if (!this.errors) {
      this.el.nativeElement.innerText = '';
      return;
    }

    this.el.nativeElement.innerText = this.getErrorMessage(this.errors);
  }

  private getErrorMessage(errors: { [key: string]: any }): string {
    if (errors['required']) {
      return `${this.capitalizeFirstLetter(this.field)} is required`;
    } else if (this.field === 'email' && errors['email']) {
      return 'Invalid email format';
    } else if (this.field === 'password' && errors['minlength']) {
      return `Password must be at least ${errors['minlength'].requiredLength} characters long`;
    } else {
      return '';
    }
  }

  private capitalizeFirstLetter(string: string): string {
    if (string.length === 0) return string;
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

}
