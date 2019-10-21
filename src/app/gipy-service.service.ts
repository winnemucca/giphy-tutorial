import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {

  constructor(private http: HttpClient) { }
  private GIPHY_URL = 'http://api.giphy.com/v1/gifs/search';

  getResults(searchTerm): Observable<object> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams()
      .set('api_key', '5fugh5La8ZfeZq4ky9FBItwXCtzWoQWO')
      .set('q', searchTerm.term)
      .set('limit', '1');
    const options = {params, headers};
    return this.http.get(`${this.GIPHY_URL}`, options).pipe(
      catchError(this.handleError)
    );
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `url is ${error.url} `,
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Status;');
  }

}

