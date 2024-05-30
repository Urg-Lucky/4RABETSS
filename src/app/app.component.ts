import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = '4rabet';

  value = localStorage.getItem('token');
  loginvalue = localStorage.getItem('logintoken');
  uservalue = localStorage.getItem('username');
}
