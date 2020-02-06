import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Product } from '../../../../shared/models/product';
import { CompanyService } from '../../../../shared/services/company.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  public productForm = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    price: ['', Validators.required],
    SKU: [''],
    inventory: ['', Validators.required],
    category: [''],
  });

  constructor(private fb: FormBuilder,
              private companyService: CompanyService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
  }

  /**
   * createProduct()
   * call company service ande create a product for this company
   *
   * @memberof CreateComponent
   */
  public createProduct() {
    // form validation
    if (this.productForm.valid) {
      // data to post
      let data: Product = {
        name: this.productForm.value.name,
        description: this.productForm.value.description,
        price: this.productForm.value.price,
        SKU: this.productForm.value.SKU,
        inventory: this.productForm.value.inventory,
      };
      this.companyService.newProduct(this.route.parent.parent.snapshot.paramMap.get('companyId'), data).subscribe((result) => {
        // redirect to the company product list page
        // tslint:disable-next-line: max-line-length
        this.router.navigate([`/${this.route.parent.parent.snapshot.paramMap.get('userId')}/store/${this.route.parent.parent.snapshot.paramMap.get('companyId')}/product`]);
      }, (error) => {
        console.log(error);
      });
    }
  }
}
