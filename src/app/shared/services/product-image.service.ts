import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductImage } from '../models/product-image';

@Injectable({
  providedIn: 'root'
})
export class ProductImageService {

  constructor(private http: HttpClient) { }

  public create(data: ProductImage) {
    return this.http.post('/productImages', data);
  }

  public get(id: any, filter = {}) {
    return this.http.get('/productImages/' + id + '?filter=' + JSON.stringify(filter));
  }

  public update(id: any, data: any) {
    return this.http.patch('/productImages/' + id, data);
  }

  public delete(id: any) {
    return this.http.delete('/productImages/' + id);
  }

  public fetchAll(filter = {}) {
    return this.http.get<any>('/productImages?filter=' + encodeURI(JSON.stringify(filter)));
  }

  public exist(id) {
    this.http.get<any>('/productImages/' + id + '/exists');
  }
}
