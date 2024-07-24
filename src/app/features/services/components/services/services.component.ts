import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  private router = inject(Router);

  goToLogin(): void {
    this.router.navigate(['services/login'])
  }

  goToPage(): void {
    this.router.navigate(['services/characters'])
  }

  goToPages(): void {
    this.router.navigate(['services/pagesCharacters'])
  }

  goToNumberPage(): void {
    this.router.navigate(['services/numberCharacters'])
  }

  goToFilterPage(): void {
    this.router.navigate(['services/filterCharacters'])
  }

  goToFilterButton(): void {
    this.router.navigate(['services/filterButtonCharacters'])
  }

  goToScrollCharacters(): void {
    this.router.navigate(['services/scrollCharacters'])
  }

}
