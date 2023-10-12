import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  apiUrl: string = 'https://api.themoviedb.org/3/'
  apiKey: string = 'f03634b58bf593de55f9482f0e602fb3'

  constructor(private _http: HttpClient) {
  }

  getTrending(): Observable<any> {
    let headers = {
      api_key: this.apiKey
    }
    return this._http.get(this.apiUrl + '/movie/11?api_key=f03634b58bf593de55f9482f0e602fb3')
  }
}
