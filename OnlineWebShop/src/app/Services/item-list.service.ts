import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemListService {
  headers: HttpHeaders = new HttpHeaders();


  constructor(private http: HttpClient) {
    this.headers = this.headers.append('Content-Type', 'application/json');
  }

  getItems(): any {
    return this.http.get<any>(`${environment.apiUrl}/main`, { headers: this.headers })
  }

  bid(data: { _id: any, price: number, rt: string }): any {
    return this.http.post<any>(`${environment.apiUrl}/buyitem`, data, { headers: this.headers })
  }

}
