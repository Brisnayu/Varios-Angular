import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';

import { catchError, throwError } from 'rxjs';
import { HandleErrorService } from '../../services/handleError/handle-error.service';
import { NotificationErrorService } from '../../services/notifications/notificationError.service';


export const handleErrorInterceptor: HttpInterceptorFn = (req, next) => {
    const errorService = inject(HandleErrorService);
    const notificationService = inject(NotificationErrorService);

    return next(req).pipe(
        catchError((error: HttpErrorResponse) => {
            let errorMsg: string;
            if (error.error instanceof ErrorEvent) {
                errorMsg = errorService.getClientError(error);
                notificationService.showError(errorMsg);
            } else {
                errorMsg = errorService.getServerError(error);
                notificationService.showError(
                    errorMsg,
                    `Error Code: ${errorService.getServerStatus(error)}`,
                );
            }
            return throwError(() => new Error(errorMsg));
        })
    )
};