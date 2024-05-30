import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';
import Swal from 'sweetalert2';
import { isNullOrUndefined } from 'util';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  Register!: FormGroup;
  // emails: any = new FormControl(null, Validators.required);
  mobile: any = new FormControl(null, Validators.required);
  username: any = new FormControl(null, Validators.required);
  password: any = new FormControl(null, Validators.required);
  confirmpassword: FormControl = new FormControl('');
  name: any = new FormControl(null, Validators.required);
  email: any = new FormControl(null, Validators.required);
  idrValue: any;
  submitted = false;
  names = 'kukubets';
  token: any;
  Emailvalue = 'kukubets@kukubets.com';

  constructor(
    private signup: RegisterService,
    private login: RegisterService,
    private _router: Router
  ) {
    this.email.setValue(this.Emailvalue);
    this.name.setValue(this.names);
  }

  ngOnInit(): void {
    this.Register = new FormGroup({
      email: this.email,

      mobile: this.mobile,
      username: this.username,
      name: this.name,
      confirmpassword: this.confirmpassword,
      password: this.password,
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.Register.controls;
  }

  onSubmit() {
    console.log(this.Register.value);
    this.submitted = true;
    if (this.Register.invalid) {
      return;
    }
    this.signup.signUp(this.Register.value).subscribe((dat: any) => {
      this.token = dat.data;
      console.log(dat);
      Swal.fire(dat.message, '', 'success');
      if ((dat.message = 'User register successfully')) {
        localStorage.setItem('token', this.token);
        // localStorage.setItem('logintoken', this.username);
        // window.location.href = 'http://localhost:4200/casino';
      }
    });
  }
  valid(): void {
    const p: RegExp = /^\d{10}$/;
    const val: HTMLInputElement | null = document.getElementById(
      'mobilenumber'
    ) as HTMLInputElement;

    if (val && p.test(val.value)) {
    } else {
      Swal.fire('Enter a valid 10-digit number', '', 'error');
    }
  }

  login2(username: any, newPassword: any) {
    var data = {
      user_name: username,
      password: newPassword,
    };
    this.login.login(data).subscribe((dat: any) => {
      console.log('====================================');
      console.log(dat);
      console.log('====================================');
    });
  }
  confirmPasswords(): void {
    const anotherVariable: string = this.password;
    this.confirmpassword.setValue(anotherVariable);
  }
}
