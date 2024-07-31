import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  private baseUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) { }

  getPokemons(offset: number, limit: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/pokemon?offset=${offset}&limit=${limit}`);
  }

  getPokemonDetail(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/pokemon/${id}`);
  }
}
