import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  public create(data: Order) {
    return this.http.post('/orders', data);
  }

  public get(id: any, filter = {}) {
    return this.http.get('/orders/' + id + '?filter=' + JSON.stringify(filter));
  }

  public update(id: any, data: any) {
    return this.http.patch('/orders/' + id, data);
  }

  public delete(id: any) {
    return this.http.delete('/orders/' + id);
  }

  public fetchAll(filter = {}) {
    return this.http.get<any>('/orders?filter=' + encodeURI(JSON.stringify(filter)));
  }

  public exist(id) {
    this.http.get<any>('/orders/' + id + '/exists');
  }
}
