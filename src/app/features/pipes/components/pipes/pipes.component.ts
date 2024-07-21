import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.scss'
})
export class PipesComponent {
  searchText: string = '';
  
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
