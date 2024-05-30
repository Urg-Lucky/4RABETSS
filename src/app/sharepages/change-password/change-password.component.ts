import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  public showPassword: boolean | undefined;
  public showPasswordOnPress: boolean | undefined;
  public showPasswordNew: boolean | undefined;
  public showPasswordConfirm: boolean | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
