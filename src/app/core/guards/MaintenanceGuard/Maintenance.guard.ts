import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { of } from 'rxjs';

const IS_UNDER_MAINTENANCE = true;

export const maintenanceGuard: CanActivateFn = () => {
  const router = inject(Router);

  if (IS_UNDER_MAINTENANCE) {
    console.log('ESTOY EN EL GUARD DE MANTENIMIENTO')
    router.navigate(['/maintenance']);
    return of(false); 
  }

  return of(true);
};