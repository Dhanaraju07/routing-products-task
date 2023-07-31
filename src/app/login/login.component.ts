import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  isLoggedIn: any = {
    username: '',
    password: '',
  };

  constructor(private router: Router, private http: HttpClient) {}
  // isLoggedIn = true;

  // onSwitchMode() {
  //   this.isLoggedIn = !this.isLoggedIn;
  // }
  // onSubmit(form: NgForm) {
  //   console.log(form.value);
  // }

  onSubmit() {
    this.http.post('https://dummyjson.com/auth/login', {
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: this.isLoggedIn.username,
        password: this.isLoggedIn.password,
      }),
    }).subscribe((res: any) => {
      console.log("Response", res.token)
      localStorage.setItem('JWT', res.token)
      this.router.navigateByUrl('/home')
    })
    
  }
}
