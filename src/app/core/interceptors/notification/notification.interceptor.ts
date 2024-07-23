import { HttpEvent, HttpInterceptorFn, HttpResponse } from "@angular/common/http";
import { inject } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { tap } from "rxjs";

export const notificationInterceptor: HttpInterceptorFn = (req, next) => {
    const toastrService = inject(ToastrService);

    return next(req).pipe(
        tap((event: HttpEvent<unknown>) => {
            if (event instanceof HttpResponse && event.status === 200) {
                toastrService.success('Logged in successfully', 'Success');
            }
        }),
    );
};