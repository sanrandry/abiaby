import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Product } from '../../../../shared/models/product';
import { CompanyService } from '../../../../shared/services/company.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../../shared/services/product.service';

@Component({
  selector: 'create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
