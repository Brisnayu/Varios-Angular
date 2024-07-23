import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'errorMessage'
})
export class ErrorMessagePipe implements PipeTransform {

  transform(errors: { [key: string]: any } | null, field: string): string {
    if (!errors) return '';

    if (errors['required']) {
      return `${this.capitalizeFirstLetter(field)} is required`;
    } else if (field === 'email' && errors['email']) {
      return 'Invalid email format';
    } else if (field === 'password' && errors['minlength']) {
      return `Password must be at least ${errors['minlength'].requiredLength} characters long`;
    } else {
      return '';
    }
  }

  private capitalizeFirstLetter(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

}
