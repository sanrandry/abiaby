import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SellerAccountService } from '../../../shared/services/seller-account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  });
  // email uniqueness error verification
  public emailUniqueness = false;
  constructor(private fb: FormBuilder, private SelerAccountService: SellerAccountService, private router: Router) { }

  ngOnInit() {
  }

  public register() {
    if (this.registerForm.valid) {
      const data = {
        name: this.registerForm.value.name,
        email: this.registerForm.value.email,
        password: this.registerForm.value.password,
      };
      this.SelerAccountService.create(data).subscribe((data) => {
        this.emailUniqueness = false;
        this.router.navigate(['/auth/login']);
      }, (error) => {
        // if the error is an email uniqeness eroor
        if (error && error.error.error.details.codes.email[0] == 'uniqueness') {
          this.emailUniqueness = true;
        }
      });
    }
  }

}
