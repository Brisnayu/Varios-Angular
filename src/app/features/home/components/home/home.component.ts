import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private router = inject(Router);

  goToDirectives(): void {
    this.router.navigate(['directives'])
  }

  goToPipes(): void {
    this.router.navigate(['pipes'])
  }

  goToServices(): void {
    this.router.navigate(['services'])
  }

  goToForms(): void {
    this.router.navigate(['form'])
  }
}
