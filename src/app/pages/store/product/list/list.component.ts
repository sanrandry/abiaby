import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CompanyService } from '../../../../shared/services/company.service';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public productList = [];

  constructor(public router: Router,
              private route: ActivatedRoute,
              private companyService: CompanyService) { }

  ngOnInit() {
    this.getProductList();
  }

  public getProductList() {
    this.companyService.productList(this.route.parent.parent.snapshot.paramMap.get('companyId')).subscribe((data: any) => {
      this.productList = data;
      console.log(data);
    }, (error) => {
      console.log('an error happen when fetching product list');
    });
  }
}
