import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  public showPassword: boolean | undefined;
  public showPasswordOnPress: boolean | undefined;
  loginfrom!: FormGroup;
  user_name: any = new FormControl(null, Validators.required);
  password: any = new FormControl(null, Validators.required);
  constructor(private login: RegisterService) {}

  ngOnInit(): void {
    this.loginfrom = new FormGroup({
      user_name: this.user_name,
      password: this.password,
    });
  }
  LoginFroms() {
    this.login.login(this.loginfrom.value).subscribe((dat: any) => {
      Swal.fire(dat.message, '', 'success');

      if ((dat.message = 'User register successfully')) {
        localStorage.setItem('logintoken', dat.data.token);
        localStorage.setItem('username', dat.data.user_name);
        window.location.href = 'http://localhost:4200/inplay';
      }
      ///  window.location.href = 'http://localhost:4200/inplay';
      // window.location.reload();
    });
  }
}
