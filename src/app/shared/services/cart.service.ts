import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cart } from '../models/cart';

@Injectable({
  providedIn: 'root',
})
export class CartService {

  constructor(private http: HttpClient) { }

  public create(data: Cart) {
    return this.http.post('/carts', data);
  }

  public get(id: any, filter = {}) {
    return this.http.get('/carts/' + id + '?filter=' + JSON.stringify(filter));
  }

  public update(id: any, data: any) {
    return this.http.patch('/carts/' + id, data);
  }

  public delete(id: any) {
    return this.http.delete('/carts/' + id);
  }

  public fetchAll(filter = {}) {
    return this.http.get<any>('/carts?filter=' + encodeURI(JSON.stringify(filter)));
  }

  public exist(id) {
    this.http.get<any>('/carts/' + id + '/exists');
  }
}
