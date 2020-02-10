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
  public edit: boolean = false;
  public sellerAccountId;
  public companyId;
  public productForm;

  public coverImageUrl;

  constructor(private fb: FormBuilder,
    private companyService: CompanyService,
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService) { }

  ngOnInit() {
    // get seller  id
    this.sellerAccountId = this.route.parent.parent.snapshot.paramMap.get('userId');
    // get companyId
    this.companyId = this.route.parent.parent.snapshot.paramMap.get('companyId');
    // initialize the product form
    this.initializeForm();
  }

  /**
   * initializeForm()
   * create productForm with form builder and initialize the form data if we are in edit mode
   *
   * @memberof ProductFormComponent
   */
  initializeForm () {
    // unchage data
      const form: any = {
        name: ['', Validators.required],
        description: ['', Validators.required],
        price: ['', Validators.required],
        SKU: [''],
        inventory: ['', Validators.required],
        category: [''],
    };
    // this dada depend on the edit status
    if (this.edit) {
      form.coverImage = [''];
    } else {
      form.coverImage = ['', Validators.required];
    }

    this.productForm = this.fb.group(form);

    // initiliaze form data
    if (this.edit) {
      // get the product id to the activated route
      const productId = this.route.snapshot.paramMap.get('productId');
      // fetch the current product
      const filter = {
        include: 'productImages',
      };
      this.productService.get(productId, filter).subscribe((currentProduct: any) => {
        this.productForm.controls.name.setValue(currentProduct.name);
        this.productForm.controls.description.setValue(currentProduct.description);
        this.productForm.controls.price.setValue(currentProduct.price);
        this.productForm.controls.SKU.setValue(currentProduct.SKU);
        this.productForm.controls.inventory.setValue(currentProduct.inventory);
        this.coverImageUrl = currentProduct.productImages[0].blob;
      });
    }
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

  public updateProduct() {
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
      this.companyService.updateProduct(this.route.parent.parent.snapshot.paramMap.get('companyId'),
                                      this.route.snapshot.paramMap.get('productId'),
                                      data).subscribe((result: any) => {
        // upload the product image if the input was changed
        if (this.productForm.value.coverImage) {
          // this.productService.newImage(result.id, {
          //   blob: this.coverImageUrl,
          // }).subscribe(() => { }, (error) => {
          //   console.log(error);
          // });
        }
        // redirect to the company product list page
        // tslint:disable-next-line: max-line-length
        this.router.navigate([`/${this.route.parent.parent.snapshot.paramMap.get('userId')}/store/${this.route.parent.parent.snapshot.paramMap.get('companyId')}/product`]);
      }, (error) => {
        console.log(error);
      });
    }
  }

  onSubmit() {
    if (!this.edit) {
      this.createProduct();
    } else {
      this.updateProduct();
    }
  }


  public deleteProduct() {
    if (this.edit) {
      this.companyService.deleteProduct(this.companyId, this.route.snapshot.paramMap.get('productId'))
          .subscribe((data) => {
            this.router.navigate(['/' + this.sellerAccountId + '/store/' + this.companyId + '/product']);
          }, (error) => {
            console.log(error);
          });
    }
  }

}
