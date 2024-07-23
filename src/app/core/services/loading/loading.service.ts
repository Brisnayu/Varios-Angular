import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class LoadingService {
    public showLoaderValue = false;

    showLoader(): void {
        this.showLoaderValue = true;
    }

    hideLoader(): void {
        this.showLoaderValue = false;
    }

    get isLoading(): boolean {
        return this.showLoaderValue;
    }
}