import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from '../models/company';
import { Product } from '../models/product';
import { ProductService } from './product.service';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {

  constructor(private http: HttpClient, private productService: ProductService) { }

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
  public productList(companyId, filter = {}) {
    return this.http.get('/companies/' + companyId + '/products?filter=' + encodeURI(JSON.stringify(filter)));
  }

  /**
   * deleteProduct()
   * delete related product for this company
   * @param {string} companyId
   * @param {string} productId
   * @returns Ob
   * @memberof CompanyService
   */
  public deleteProduct(companyId, productId) {
    return this.productService.deleteAllImage(productId).pipe(
      switchMap((deletedImages) => {
        return this.http.delete('/companies/' + companyId + '/products/' + productId);
      }),
    );
  }

  /**
   * updateProduct()
   * update a product linked by this company
   *
   * @param {string} companyId
   * @param {string} productId
   * @param {Product} data
   * @returns Observable <any>
   * @memberof CompanyService
   */
  public updateProduct(companyId, productId, data: Product) {
    return this.http.put('/companies/' + companyId + '/products/' + productId, data);
  }

/**
 * newCompanyImage(companyId, data)
 * create a company image
 *
 * @param {string} companyId
 * @param {object} data
 * @returns Observable<any>
 * @memberof CompanyService
 */
  public newCompanyImage(companyId, data) {
    return this.http.post(`/companies/${companyId}/companyImages`, data);
  }

  /**
   * updateCompanyIMage(companyId, data)
   * update a company image
   *
   * @param {string} companyId
   * @param {object} data
   * @returns Observable<any>
   * @memberof CompanyService
   */
  public updateCompanyImage(companyId, data) {
    return this.http.put(`/companies/${companyId}/companyImages`, data);
  }
}
