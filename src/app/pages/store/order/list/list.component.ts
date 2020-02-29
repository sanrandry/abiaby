import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../../../../shared/services/order.service';
import { OrderItemService } from '../../../../shared/services/order-item.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public CompanyId;
  public orderList: any = [];
  constructor(private route: ActivatedRoute, private orderItemService: OrderItemService) { }

  ngOnInit() {
    this.getCompanyIdFromUrl();
    this.getOrderList();
  }

  /**
   * getCompanyIdFromUrl()
   * get the current company id form the url params
   *
   * @memberof ListComponent
   */
  public getCompanyIdFromUrl() {
    // when the url change this observable submit a new value
    this.route.parent.parent.paramMap.subscribe((params) => {
      this.CompanyId = params.get('companyId');
    });
  }

  public getOrderList() {
    const orderItemFilter = {
      include: [
        {
          relation: 'order',
          fields: {
            id: true,
          },
        },
        {
          relation: 'product',
          scope: {
            fields: {
              id: true,
            },
            where: {
              companyId: this.CompanyId,
            },
          },
        },
      ],
      fields: {
        id: true,
        productId: true,
      },
    };
    this.orderItemService.fetchAll(orderItemFilter).pipe(
      map((value: any) => {
        return value.filter((item) => {
          if (item.product) {
            return true;
          } else {
            return false;
          }
        });
      }),
    ).subscribe((orderItem) => {
      this.orderList = orderItem;
    })
  }

}
