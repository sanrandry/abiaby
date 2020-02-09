import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { CompanyService } from '../../../../../shared/services/company.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../../../shared/services/product.service';
import { Product } from '../../../../../shared/models/product';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {

  @Input()
  public edit = false;
  public productForm = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    coverImage: ['', Validators.required],
    price: ['', Validators.required],
    SKU: [''],
    inventory: ['', Validators.required],
    category: [''],
  });

  public coverImageUrl;

  constructor(private fb: FormBuilder,
    private companyService: CompanyService,
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService) { }

  ngOnInit() {
  }

  /**
   * getCoverImage
   * initilize conver image blog and preview the current image
   *
   * @param {*} event
   * @returns
   * @memberof CreateComponent
   */
  public getCoverIMage(event) {
    const file = event.target.files[0];
    // verify if the user select a file
    if (!file) {
      // reset form and delete image preview
      this.productForm.controls.coverImage.setValue('');
      this.coverImageUrl = null;
      return;
    }
    // verify the file mimeType
    if (file.type.match(/image\/*/) == null) {
      this.productForm.controls.coverImage.setValue('');
      this.coverImageUrl = null;
      return;
    }
    // if there is OK
    // create a file reader
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (_event) => {
      this.coverImageUrl = reader.result;
      console.log(this.companyService);
    };
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
      this.companyService.newProduct(this.route.parent.parent.snapshot.paramMap.get('companyId'), data).subscribe((result: any) => {
        // upload the product image
        this.productService.newImage(result.id, {
          blob: this.coverImageUrl,
        }).subscribe(() => { }, (error) => {
          console.log(error);
        })
        // redirect to the company product list page
        // tslint:disable-next-line: max-line-length
        this.router.navigate([`/${this.route.parent.parent.snapshot.paramMap.get('userId')}/store/${this.route.parent.parent.snapshot.paramMap.get('companyId')}/product`]);
      }, (error) => {
        console.log(error);
      });
    }
  }

  public openFileInput() {

  }

}
