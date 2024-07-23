import { AfterViewChecked, ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { LoadingService } from './core/services/loading/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewChecked {
  title = 'little-test';

  private cdRef = inject(ChangeDetectorRef);
  private loadingService = inject(LoadingService);

  public isLoading: boolean = false;

  ngOnInit(): void {
    this.isLoading = this.loadingService.isLoading;
  }

  ngAfterViewChecked(): void {
    if(this.cdRef && this.isLoading !== this.loadingService.isLoading) {
      this.isLoading = this.loadingService.isLoading;
      console.log('Actualizando isLoading:', this.isLoading);
      this.cdRef.detectChanges();
    }
  }
}
