import { HttpClient, HttpParams } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { catchError, map, Observable, throwError } from "rxjs";
import { RootObject } from "../../interfaces/characters";
import { Character } from "../../interfaces/ICharacters";

@Injectable({
    providedIn: 'root'
})
export class GetCharacters {
    private http = inject(HttpClient);
    private baseUrl = 'https://rickandmortyapi.com/api/character';

    getAllCharacters(): Observable<RootObject> {
        return this.http.get<RootObject>(this.baseUrl);
    }

    getCharacters(page: number = 1): Observable<RootObject> {
        return this.http.get<RootObject>(`${this.baseUrl}?page=${page}`).pipe(
            map(response => response)
        );
    }

    getCharactersNumberPage(page: number): Observable<Character[]> {
        let params = new HttpParams().set('page', page.toString())

        return this.http.get<RootObject>(this.baseUrl, { params } ).pipe(
            map(response => response.results),
            catchError((error) => {
                console.log('Error fetching characters: ', error);
                return throwError(() => new Error('Error fetching characters'))
            })
        );
    }

}