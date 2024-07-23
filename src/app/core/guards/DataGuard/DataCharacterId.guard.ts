import { inject } from '@angular/core';
import { CanActivateFn, Router, ActivatedRouteSnapshot } from '@angular/router';
import { GetCharacters } from '../../services/getCharacters/getCharacters.service';
import { catchError, map, of } from 'rxjs';

export const canActivateCharacter: CanActivateFn = (route: ActivatedRouteSnapshot) => {
    const characterService = inject(GetCharacters);
    const router = inject(Router);
    const id = +route.paramMap.get('id')!;
  
    console.log("SOY EL ID DEL GUARD", id);
  
    return characterService.getCharactersById(id).pipe(
      map(response => {
        if (response) {
        //   console.log('ESTO ESTÁ LLEGANDO', response);
          return true; 
        } else {
          console.log('ESTÁ ENTRANDO AQUI', response);
          router.navigate(['/not-found']); 
          return false;
        }
      }),
      catchError(error => {
        console.log('Error in guard: ', error);
        router.navigate(['/not-found']); 
        return of(false); 
      })
    );
  };