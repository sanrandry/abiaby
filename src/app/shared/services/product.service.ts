import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  public create(data: Product) {
    return this.http.post('/products', data);
  }

  public get(id: any, filter = {}) {
    return this.http.get('/products/' + id + '?filter=' + JSON.stringify(filter));
  }

  public update(id: any, data: any) {
    return this.http.patch('/products/' + id, data);
  }

  public delete(id: any) {
    return this.http.delete('/products/' + id);
  }

  public fetchAll(filter = {}) {
    return this.http.get<any>('/products?filter=' + encodeURI(JSON.stringify(filter)));
  }

  public exist(id) {
    this.http.get<any>('/products/' + id + '/exists');
  }

  /**
   * newImage()
   * add an related image to this product
   *
   * @param {string} productId
   * @param {object} data
   * @returns Observable
   * @memberof ProductService
   */
  public newImage(productId, data) {
    return this.http.post('/products/' + productId + '/productImages', data);
  }

  /**
   * deleteAllImage()
   * delete all related image for this product
   *
   * @param {string} productId
   * @returns Observable<any>
   * @memberof ProductService
   */
  public deleteAllImage(productId) {
    return this.http.delete('/products/' + productId + '/productImages');
  }
}
