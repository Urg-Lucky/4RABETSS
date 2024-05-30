import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AmmountapiService {
  var = 'https://easybet24.us/api/v5/';
  valueyoken = localStorage.getItem('logintoken');
  StartDate = sessionStorage.getItem('StartDate');
  LastDate = sessionStorage.getItem('LastDate');
  constructor(private http: HttpClient) {}

  //------------------------------------------account-statement---------------------------------------------------//
  getAccount(): Observable<any> {
    const url = this.var + `statement`;
    const from_date = this.StartDate;
    const pageno = 1;
    const limit = 15;
    const to_date = this.LastDate;
    const body = {
      from_date: from_date,
      pageno: pageno,
      to_date: to_date,
      limit: limit,
    };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.valueyoken}`,
    });

    return this.http.post(url, body, { headers: headers });
  }
}
