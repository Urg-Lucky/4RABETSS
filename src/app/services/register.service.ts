import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  var = 'https://easybet24.us/api/v5/';
  games = 'https://easybet24.us/api/';
  valueyoken = localStorage.getItem('logintoken');
  Gameid = localStorage.getItem('gameid');
  ProviderId = localStorage.getItem('Providername');
  catergory = localStorage.getItem('category');
  Values = sessionStorage.getItem('cat');
  market_id = sessionStorage.getItem('market_id');
  match_id = sessionStorage.getItem('match_id');
  sport_id = sessionStorage.getItem('sport_id');
  selectionId = sessionStorage.getItem('selectionId');
  price = sessionStorage.getItem('price');
  stack = sessionStorage.getItem('first-price');
  Back = sessionStorage.getItem('football');
  firstPrice: any;
  parsedFirstPrice: any;
  constructor(private http: HttpClient) {
    this.convertnumber();
  }

  convertnumber() {
    this.firstPrice = sessionStorage.getItem('first-price');
    this.parsedFirstPrice = parseInt(this.firstPrice);
  }

  signUp(data: any) {
    let url = this.var + 'sign-up';
    return this.http.post(url, data);
  }
  login(user: any) {
    let url = this.var + 'login';
    return this.http.post(url, user);
  }

  //----------------------------------------------------------casino apis ----------------------------------------------//

  getRoulete(): Observable<any> {
    const url = this.var + `getCasinoListByCategory`;
    const limit = 1000;
    const category = 'roulette';
    const body = { limit: limit, category: category };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(url, body, { headers: headers });
  }

  getLighting(): Observable<any> {
    const url = this.var + `getCasinoListByCategory`;
    const limit = 1000;
    const category = 'lightning';
    const body = { limit: limit, category: category };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(url, body, { headers: headers });
  }

  getLiveCasnio(): Observable<any> {
    const url = this.var + `getCasinoListByCategory`;
    const limit = 1000;
    const category = 'live-casino';
    const body = { limit: limit, category: category };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(url, body, { headers: headers });
  }

  getTeenPatti(): Observable<any> {
    const url = this.var + `getCasinoListByCategory`;
    const limit = 1000;
    const category = 'teen-patti';
    const body = { limit: limit, category: category };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(url, body, { headers: headers });
  }

  getAndar(): Observable<any> {
    const url = this.var + `getCasinoListByCategory`;
    const limit = 1000;
    const category = 'andar-bahar';
    const body = { limit: limit, category: category };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(url, body, { headers: headers });
  }

  getDargron(): Observable<any> {
    const url = this.var + `getCasinoListByCategory`;
    const limit = 1000;
    const category = 'dragon-tiger';
    const body = { limit: limit, category: category };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(url, body, { headers: headers });
  }

  getbaccarat(): Observable<any> {
    const url = this.var + `getCasinoListByCategory`;
    const limit = 1000;
    const category = 'baccarat';
    const body = { limit: limit, category: category };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(url, body, { headers: headers });
  }

  getblackjack(): Observable<any> {
    const url = this.var + `getCasinoListByCategory`;
    const limit = 1000;
    const category = 'blackjack';
    const body = { limit: limit, category: category };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(url, body, { headers: headers });
  }

  gettablegames(): Observable<any> {
    const url = this.var + `getCasinoListByCategory`;
    const limit = 1000;
    const category = 'table-games';
    const body = { limit: limit, category: category };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(url, body, { headers: headers });
  }

  getpoker(): Observable<any> {
    const url = this.var + `getCasinoListByCategory`;
    const limit = 1000;
    const category = 'poker';
    const body = { limit: limit, category: category };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(url, body, { headers: headers });
  }

  getholdem(): Observable<any> {
    const url = this.var + `getCasinoListByCategory`;
    const limit = 1000;
    const category = 'holdem';
    const body = { limit: limit, category: category };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(url, body, { headers: headers });
  }

  getiframe(): Observable<any> {
    const url = this.games + `game-login`;
    const gameId = this.Gameid;
    const providerName = this.ProviderId;
    const body = { gameId: gameId, providerName: providerName };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.valueyoken}`,
    });

    return this.http.post(url, body, { headers: headers });
  }

  getallCatergory(): Observable<any> {
    const url = this.var + `getCasinoListByCategory`;
    const limit = 1000;
    const category = this.Values;
    const body = { limit: limit, category: category };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(url, body, { headers: headers });
  }
  //------------------------------------------End Casino------------------------------------------//
  //------------------------------------------live Casino------------------------------------------//
  getlivecasino(): Observable<any> {
    const url = this.var + `getCasinoListByCategory`;
    const limit = 1000;
    const category = 'live-casino';
    const body = { limit: limit, category: category };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(url, body, { headers: headers });
  }
  //-----------------------------------------------Live casino end------------------------------------//
  //--------------------------------------------------slots-------------------------------------------//
  getSlots(): Observable<any> {
    const url = this.var + `getCasinoListByCategory`;
    const limit = 1000;
    const category = 'JiLi';
    const body = { limit: limit, category: category };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(url, body, { headers: headers });
  }
  //-------------------------------------------end slots-------------------------------------------//
  //----------------------------------------------virtual sports-----------------------------------//
  getvirtualSports(): Observable<any> {
    const url = this.var + `getCasinoListByCategory`;
    const limit = 1000;
    const category = 'virtual';
    const body = { limit: limit, category: category };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(url, body, { headers: headers });
  }
  //----------------------------------------------end virtual sports-----------------------------------//
  //------------------------------------------------cricket games api------------------------------------//
  getcricket() {
    const url = this.var + `getseiresMatchsList`;
    const limit = 50;
    const pageno = 1;
    const series_id = 0;
    const sport_id = 4;
    const type = 'home';
    const body = {
      limit: limit,
      pageno: pageno,
      series_id: series_id,
      sport_id: sport_id,
      type: type,
    };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.valueyoken}`,
    });

    return this.http.post(url, body, { headers: headers });
  }

  getcricketbit() {
    // const url = this.var + `list-bt-ssn-mk`;
    const url = this.var + `save-bet`;
    const limit = 10;
    const pageno = 1;
    const market_id = this.market_id;
    const match_id = this.match_id;
    const sport_id = this.sport_id;
    const selection_id = this.selectionId;
    const price = this.price;

    const body = {
      limit: limit,
      pageno: pageno,
      market_id: market_id,
      match_id: match_id,
      port_id: sport_id,
      selection_id: selection_id,
      odds: price,
    };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.valueyoken}`,
    });

    return this.http.post(url, body, { headers: headers });
  }

  getSinglecriket() {
    // const url = this.var + `list-bt-ssn-mk`;
    const url = this.var + `get-cricket-detail`;
    const match_id = this.match_id;
    const sport_id = this.sport_id;
    const body = {
      match_id: match_id,
      sport_id: sport_id,
    };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.valueyoken}`,
    });

    return this.http.post(url, body, { headers: headers });
  }

  getcricketsinglebet() {
    // const url = this.var + `list-bt-ssn-mk`;
    const url = this.var + `save-bet`;
    const market_id = this.market_id;
    const match_id = this.match_id;
    const is_back = '0';
    const selection_id = this.selectionId;
    const stack = this.parsedFirstPrice;
    const odds = this.price;

    const body = {
      market_id: market_id,
      match_id: match_id,
      selection_id: selection_id,
      is_back: is_back,
      stack: stack,
      odds: odds,
    };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.valueyoken}`,
    });

    return this.http.post(url, body, { headers: headers });
  }

  //-----------------------------------------------end of cricket---------------------------------------------//
  //-------------------------------------------soccer-------------------------------------------------------//

  getSoccer() {
    const url = this.var + `getseiresMatchsList`;
    const limit = 50;
    const pageno = 1;
    const series_id = 0;
    const sport_id = 1;
    const type = 'home';
    const body = {
      limit: limit,
      pageno: pageno,
      series_id: series_id,
      sport_id: sport_id,
      type: type,
    };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.valueyoken}`,
    });

    return this.http.post(url, body, { headers: headers });
  }
  //----------------------------------------end soccer---------------------------------------------------------//
  //-----------------------------------------tennis------------------------------------------------------------//

  getTennis() {
    const url = this.var + `getseiresMatchsList`;
    const limit = 50;
    const pageno = 1;
    const series_id = 0;
    const sport_id = 2;
    const type = 'home';
    const body = {
      limit: limit,
      pageno: pageno,
      series_id: series_id,
      sport_id: sport_id,
      type: type,
    };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.valueyoken}`,
    });

    return this.http.post(url, body, { headers: headers });
  }

  gettennissinglebet() {
    // const url = this.var + `list-bt-ssn-mk`;
    const url = this.var + `save-bet`;
    const market_id = this.market_id;
    const match_id = this.match_id;
    const is_back = '2';
    const selection_id = this.selectionId;
    const stack = this.parsedFirstPrice;
    const odds = this.price;

    const body = {
      market_id: market_id,
      match_id: match_id,
      selection_id: selection_id,
      is_back: is_back,
      stack: Number(stack),
      odds: odds,
    };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.valueyoken}`,
    });

    return this.http.post(url, body, { headers: headers });
  }
}
