import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  value = localStorage.getItem('token');
  loginvalue = localStorage.getItem('logintoken');
  uservalue = localStorage.getItem('username');
  constructor() {}

  logout() {
    localStorage.clear();
    window.location.href = 'http://localhost:4200';
  }
  ngOnInit(): void {}
}
