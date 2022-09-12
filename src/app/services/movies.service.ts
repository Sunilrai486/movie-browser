import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseURL = 'http://www.omdbapi.com/?apikey=dd403fa3';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  searchMovies(searchTerm: string): Observable<any>{
    return this.http.get(baseURL, {params: {s: searchTerm}});
  }

  getMovideDetails(imdbId: string): Observable<any>{
    return this.http.get(baseURL, {params: {i: imdbId}});
  }
}
