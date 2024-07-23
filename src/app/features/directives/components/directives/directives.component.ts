import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.scss'
})
export class DirectivesComponent {
  public condition: boolean = true;
  public showMessage: boolean = true;
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  toggleVisibility() {
    this.showMessage = !this.showMessage;
  }

  firstName: string = 'Rutu';
  
  changeName(): void {
    this.firstName = 'Rutuparn';
  }

  // EJEMPLO DIRECTIVA DE FORMULARIO:

  get formControls() {
    return this.myForm.controls;
  }
}



