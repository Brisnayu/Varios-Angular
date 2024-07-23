import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.scss'
})
export class PipesComponent {
  searchText: string = '';
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  getControlErrors(controlName: string) {
    return this.form.get(controlName)?.errors || null;
  }
  
  cats: { name: string, breed: string }[] = [
    { name: 'Hera', breed: 'Calicó' },
    { name: 'Whiskers', breed: 'Siamese' },
    { name: 'Fluffy', breed: 'Persian' },
    { name: 'Mittens', breed: 'Maine Coon' },
    { name: 'Tiger', breed: 'Bengal' },
    { name: 'Luna', breed: 'Sphynx' },
    { name: 'Bella', breed: 'Ragdoll' },
    { name: 'Aroa', breed: 'Scottish Fold' },
    { name: 'Molly', breed: 'British Shorthair' }
  ];

  cats2: { name: string, breed: string }[] = [
    { name: 'Hera', breed: 'Calicó' },
    { name: 'Whiskers', breed: 'Siamese' },
    { name: 'Fluffy', breed: 'Persian' },
    { name: 'Mittens', breed: 'Maine Coon' },
    { name: 'Tiger', breed: 'Bengal' },
    { name: 'Luna', breed: 'Sphynx' },
    { name: 'Bella', breed: 'Ragdoll' },
    { name: 'Aroa', breed: 'Scottish Fold' },
    { name: 'Molly', breed: 'British Shorthair' }
  ];

  cats3: { name: string, breed: string }[] = [
    { name: 'Hera', breed: 'Calicó' },
    { name: 'Whiskers', breed: 'Siamese' },
    { name: 'Fluffy', breed: 'Persian' },
    { name: 'Mittens', breed: 'Maine Coon' },
    { name: 'Tiger', breed: 'Bengal' },
    { name: 'Luna', breed: 'Sphynx' },
    { name: 'Bella', breed: 'Ragdoll' },
    { name: 'Aroa', breed: 'Scottish Fold' },
    { name: 'Molly', breed: 'British Shorthair' }
  ];

  cat = {
    name: 'Hera',
    age: 4,
    occupation: 'Calicó'
  };
}
