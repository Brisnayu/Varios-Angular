import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { handleErrorInterceptor } from './interceptors/handleError/handle-error.interceptor';
import { notificationInterceptor } from './interceptors/notification/notification.interceptor';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    provideHttpClient(withInterceptors([handleErrorInterceptor])),
    provideHttpClient(withInterceptors([notificationInterceptor]))
  ]
})
export class CoreModule { }
