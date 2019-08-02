import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tap, mapTo, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemListService {

  constructor(private http: HttpClient) { }

  getItems(): any {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    return this.http.get<any>(`${environment.apiUrl}/main`, { headers })
  }
}
