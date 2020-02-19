import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SellerAccountService } from '../../../shared/services/seller-account.service';
import { AuthenticationService } from '../../../shared/authetication/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  // show the change password form
  public showProfilForm: boolean = false;
  // the current user profile data
  public profile: any = {};

  public profileForm = this.formBuilder.group({
    oldPassword: ['', Validators.required],
    newPassword: ['', Validators.required],
    confirmPassword: ['', Validators.required],
  });
  // verify if the current password have an error whe calling the web service
  public profileFormIvalidPasswordError = false;
  constructor(private formBuilder: FormBuilder,
              private sellerAccountService: SellerAccountService,
              private authenticationService: AuthenticationService,
              private router: Router) { }

  ngOnInit() {
    this.getProfile();
  }

  /**
   * getProfile()
   * get the current user profile
   */
  private getProfile() {
    const sellerAccoutFilter = {
      include: [
        'companies',
      ],
    };
    this.sellerAccountService.get(this.authenticationService.getUserId(), sellerAccoutFilter)
                            .subscribe((sellerAccount) => {
                              this.profile = sellerAccount;
                              console.log(sellerAccount);
                            }, (error) => {
                              console.log('an error was occured when getting the seller account data');
                            });
  }

  /**
   * submitProfileForm()
   * this method change just the current seller account password
   */
  public submitProfileForm() {
    if (this.profileForm.valid) {
      this.sellerAccountService.changePassword(this.profileForm.value.oldPassword, this.profileForm.value.newPassword)
                                .subscribe((data) => {
                                  this.authenticationService.logout().subscribe(() => {
                                    this.router.navigate(['/auth/login']);
                                  });
                                }, (error) => {
                                    if (error.error.error.code === 'INVALID_PASSWORD') {
                                      this.profileFormIvalidPasswordError = true;
                                    }
                                });
    }
  }

}
