import { HttpInterceptorFn } from "@angular/common/http";
import { inject } from "@angular/core";
import { LoadingService } from "../../services/loading/loading.service";
import { finalize, timer } from "rxjs";

export const LoadingInterceptor: HttpInterceptorFn = (req, next) => {
    const loadingService = inject(LoadingService);

    if (req.headers.get('X-LOADING') === 'false') {
        return next(req);
    }

    loadingService.showLoader();

    return next(req).pipe(finalize(() => {
        console.log('OCULTANDO EL LOADING');
        timer(350).subscribe(() => loadingService.hideLoader())
    }))
}