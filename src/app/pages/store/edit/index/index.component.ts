import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from '../../../../shared/services/company.service';

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
    logo: [''],
  });

  public sellerAccountId;
  public companyId;
  private oldCompanyData;

  // logo base64 data
  public logoUrl;
  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private companyService: CompanyService,
              private router: Router) { }

  ngOnInit() {
    this.getCompanyIdAndSellerAccoutId();
    this.getCompanyData();
  }

  /**
   * getCoverImage
   * initilize conver image blog and preview the current image
   *
   * @param {*} event
   * @returns
   * @memberof CreateComponent
   */
  public getlog(event) {
    const file = event.target.files[0];
    // verify if the user select a file
    if (!file) {
      // reset form and delete image preview
      this.companyForm.controls.logo.setValue('');
      this.logoUrl = null;
      return;
    }
    // verify the file mimeType
    if (file.type.match(/image\/*/) == null) {
      this.companyForm.controls.coverImage.setValue('');
      this.logoUrl = null;
      return;
    }
    // if there is OK
    // create a file reader
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (_event) => {
      this.logoUrl = reader.result;
    };
  }

  private getCompanyIdAndSellerAccoutId() {
    this.companyId = this.route.snapshot.parent.parent.paramMap.get('companyId');
    this.sellerAccountId = this.route.snapshot.parent.parent.paramMap.get('userId');
  }

  private getCompanyData() {
    const companyFilter = {
      include: [
        'companyImages',
      ],
    };
    this.companyService.get(this.companyId, companyFilter).subscribe((company: any) => {
      this.companyForm.controls.name.setValue(company.name);
      this.companyForm.controls.address.setValue(company.address);
      this.companyForm.controls.email.setValue(company.email);
      this.companyForm.controls.phoneNumber.setValue(company.phoneNumber);
      this.logoUrl = company.companyImages.blob;
      this.oldCompanyData = company;
    });
  }


  /**
   * submitCompanyForm
   * update the current company
   *
   * @memberof IndexComponent
   */
  public submitCompanyForm() {
    if (this.companyForm.valid) { // check if the company form is valid
      const companyData = { // data to update
        name: this.companyForm.value.name,
        address: this.companyForm.value.address,
        email: this.companyForm.value.email,
        phoneNumber: this.companyForm.value.phoneNumber,
      };
      // update the company data
      this.companyService.update(this.companyId, companyData).subscribe(() => {
        this.router.navigate([`/${this.sellerAccountId}/store/${this.companyId}/configuration`]);
      });
      if (this.companyForm.controls.logo.dirty) { // verify if the logo input is dirty
        const dataIMage = {
          blob: this.logoUrl,
        };
        if (this.oldCompanyData.companyImages) { // verify if the old company data has an logo
          // update the company logo
          this.companyService.updateCompanyImage(this.companyId, dataIMage).subscribe(() => {
            this.router.navigate([`/${this.sellerAccountId}/store/${this.companyId}/configuration`]);
          });
        } else { // create the company logo
          this.companyService.updateCompanyImage(this.companyId, dataIMage).subscribe(() => {
            this.router.navigate([`/${this.sellerAccountId}/store/${this.companyId}/configuration`]);
          });
        }
      }
    }
  }

}
