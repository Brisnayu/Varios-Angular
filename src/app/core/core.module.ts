import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { handleErrorInterceptor } from './interceptors/handleError/handle-error.interceptor';
import { notificationInterceptor } from './interceptors/notification/notification.interceptor';
import { LoadingInterceptor } from './interceptors/loading/loading.interceptor';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    provideHttpClient(withInterceptors([handleErrorInterceptor, notificationInterceptor, LoadingInterceptor]))
  ]
})
export class CoreModule { }
