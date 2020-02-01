import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../../../shared/authetication/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  public loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  // authentication error managment
  public authenticationError = false;

  constructor(private fb: FormBuilder, private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  public login() {
    if (this.loginForm.valid) {
      this.authenticationService.login(this.loginForm.value).subscribe((data: any) => {
        this.router.navigate([`/${data.userId}/dashboard`]);
        this.authenticationError = false;
      }, (error) => {
        this.authenticationError = true;
      });
    }
  }

}
