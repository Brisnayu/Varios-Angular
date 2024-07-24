import { Pipe, PipeTransform } from '@angular/core';

interface ValidationErrors {
  required?: boolean;
  minlength?: { requiredLength: number };
  email?: boolean;
  [key: string]: any; //ES MEJOR TENERLO TODO TIPADO EN LUGAR DE USAR UN ANY
}

@Pipe({
  name: 'errorMessage'
})
export class ErrorMessagePipe implements PipeTransform {

  transform(errors: ValidationErrors | null, field: string): string {
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
