import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CompanyService } from '../../../../shared/services/company.service';
import { SellerAccountService } from '../../../../shared/services/seller-account.service';
import { AuthenticationService } from '../../../../shared/authetication/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  public companyForm = this.fb.group({
    name: ['', Validators.required],
    address: ['', Validators.required],
    email: ['', Validators.required],
    phoneNumber: ['', Validators.required],
  });
  constructor(private fb: FormBuilder, private sellerAccountService: SellerAccountService,
              private authenticationService: AuthenticationService, 
              private router: Router) { }

  ngOnInit() {
  }

  public createCompany() {
    if (this.companyForm.valid) {
      this.sellerAccountService.companyCreate(this.authenticationService.getUserId(), this.companyForm.value).subscribe((data) => {
        this.router.navigate([`${this.authenticationService.getUserId()}/store`]);
      });
    }
  }

}
