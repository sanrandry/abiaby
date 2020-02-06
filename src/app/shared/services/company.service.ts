import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from '../models/company';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {

  constructor(private http: HttpClient) { }

  public create(data: Company) {
    return this.http.post('/companies', data);
  }

  public get(id: any, filter = {}) {
    return this.http.get('/companies/' + id + '?filter=' + JSON.stringify(filter));
  }

  public update(id: any, data: any) {
    return this.http.patch('/companies/' + id, data);
  }

  public delete(id: any) {
    return this.http.delete('/companies/' + id);
  }

  public fetchAll(filter = {}) {
    return this.http.get<any>('/companies?filter=' + encodeURI(JSON.stringify(filter)));
  }

  public exist(id) {
    this.http.get<any>('/companies/' + id + '/exists');
  }

  /**
   * newProduct()
   * create a new product for a company
   *
   * @param {*} companyId
   * @param {Product} data
   * @returns Observable <any>
   * @memberof CompanyService
   */
  public newProduct(companyId, data: Product) {
    return this.http.post('/companies/' + companyId + '/products', data);
  }

  /**
   * productList()
   * get the product list for this company
   *
   * @param {string} companyId
   * @returns
   * @memberof CompanyService
   */
  public productList(companyId) {
    return this.http.get('/companies/' + companyId + '/products');
  }
}
