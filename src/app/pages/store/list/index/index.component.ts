import { Component, OnInit } from '@angular/core';
import { SellerAccountService } from '../../../../shared/services/seller-account.service';
import { AuthenticationService } from '../../../../shared/authetication/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  public companyList = [];

  constructor(private sellerAccountService: SellerAccountService,
              public authenticationService: AuthenticationService,
              private router: Router) { }

  ngOnInit() {
    this.initializeDecision();
  }

  /**
   * initilalizeDecision
   * perform the descision to take before loading the component
   */
  private initializeDecision() {
    // get the seler account company list
    this.sellerAccountService.company(this.authenticationService.getUserId()).subscribe((data: any) => {
      // if there is no company, redirect to company creaation page
      if (!data.length) {
        this.router.navigate([`/${this.authenticationService.getUserId()}/store/create`]);
      } else if (data.length === 1) {
        // if there is only one company, redirect to the company dashboard
        this.router.navigate([`/${this.authenticationService.getUserId()}/store/${data[0].id}`]);
      } else {
        // else display the company list
        this.companyList = data;
      }
    });
  }

}
