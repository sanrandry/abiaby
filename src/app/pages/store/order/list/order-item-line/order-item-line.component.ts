import { Component, OnInit, Input } from '@angular/core';
import { OrderItemService } from '../../../../../shared/services/order-item.service';

@Component({
  selector: '[order-item-line]',
  templateUrl: './order-item-line.component.html',
  styleUrls: ['./order-item-line.component.scss']
})
export class OrderItemLineComponent implements OnInit {
  @Input() public orderItemId;
  public orderItem;
  constructor(private orderItemService: OrderItemService) { }

  ngOnInit() {
    this.getOrderItem();
  }

  public getOrderItem() {
    const orderItemFilter = {
      include: [
        {
          relation: 'order',
          scope: {
            include: 'account'
          }
        },
        {
          relation: 'product',
        },
      ],
    };
    this.orderItemService.get(this.orderItemId, orderItemFilter).subscribe((orderItem) => {
      this.orderItem = orderItem;
      // console.log(this.orderItem)
    });
  }

  /**
   * translateTmpStatus(status) 
   * this function is a temprorary order status translation
   *
   * @param {string} status
   * @returns string
   * @memberof OrderItemLineComponent
   */
  public translateTmpStatus(status) {
    let translatedStatus = '';
    switch (status) {
      case 'new':
        translatedStatus = 'Nouveau';
        break;
      case 'hold':
        translatedStatus = 'En attente';
        break;
      case 'delivred':
        translatedStatus = 'Livré';
        break;
      case 'closed':
        translatedStatus = 'Fermé';
        break;
    }
    return translatedStatus;
  }

  /**
   *  calculateTotal()
   * calculate the total price of an order
   *
   * @returns nunber
   * @memberof OrderItemLineComponent
   */
  public calculateTotal() {
    if (!this.orderItem.product) {
      return 0;
    }
    return this.orderItem.quantity * this.orderItem.product.price;
  }

}
