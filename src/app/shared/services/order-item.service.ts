import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrderItem } from '../models/order-item';

@Injectable({
  providedIn: 'root'
})
export class OrderItemService {

  constructor(private http: HttpClient) { }

  public create(data: OrderItem) {
    return this.http.post('/orderItems', data);
  }

  public get(id: any, filter = {}) {
    return this.http.get('/orderItems/' + id + '?filter=' + JSON.stringify(filter));
  }

  public update(id: any, data: any) {
    return this.http.patch('/orderItems/' + id, data);
  }

  public delete(id: any) {
    return this.http.delete('/orderItems/' + id);
  }

  public fetchAll(filter = {}) {
    return this.http.get<any>('/orderItems?filter=' + encodeURI(JSON.stringify(filter)));
  }

  public exist(id) {
    this.http.get<any>('/orderItems/' + id + '/exists');
  }
}
