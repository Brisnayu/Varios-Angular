import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CanComponentDeactivate } from '../../../../core/guards/unSavedChanges/unSavedChanges.guard';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

// NO ES ESTRICTAMENTE NECESARIO IMPLEMENTAR LA INTERFACE, PERO SI DICE QUE ES BUENA PRÁCTICA, IGUAL FUNCIONA SIN ESO
export class LoginComponent implements CanComponentDeactivate {
  private hasUnsavedChanges: boolean = false;
  public loginForm: FormGroup;
  private router = inject(Router);

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: [''],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    console.log(this.loginForm.value);
    this.loginForm.markAsPristine();
    this.hasUnsavedChanges = false; 

    if(this.loginForm.valid) {
      this.router.navigate(['services/characters'])
    }
  }

  getControlErrors(controlName: string) {
    return this.loginForm.get(controlName)?.errors || null;
  }

  canDeactivate(): boolean {
    if (this.loginForm.dirty) {
      console.log("ESTO ESTÁ SALIENDO")
      return confirm('Tienes cambios sin guardar 😢. ¿Seguro que quieres salir 🤔?');
    }
    return true;
  }
}
