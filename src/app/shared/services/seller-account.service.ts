import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SellerAccount } from '../models/seller-account';

@Injectable({
  providedIn: 'root',
})
export class SellerAccountService {

  constructor(private http: HttpClient) { }

  public create(data: SellerAccount) {
    return this.http.post('/sellerAccounts', data);
  }

  public get(id: any, filter = {}) {
    return this.http.get('/sellerAccounts/' + id + '?filter=' + JSON.stringify(filter));
  }

  public update(id: any, data: any) {
    return this.http.patch('/sellerAccounts/' + id, data);
  }

  public delete(id: any) {
    return this.http.delete('/sellerAccounts/' + id);
  }

  public fetchAll(filter = {}) {
    return this.http.get<any>('/sellerAccounts?filter=' + encodeURI(JSON.stringify(filter)));
  }

  public exist(id) {
    this.http.get<any>('/sellerAccounts/' + id + '/exists');
  }

  /**
   * companyCreate
   * Create a company for this seller account
   * @param id string
   * @param data string
   * @return Observable<any>
   */
  public companyCreate(id, data) {
    return this.http.post('/sellerAccounts/' + id + '/companies', data);
  }

  /**
   * company
   * get the seller account company list
   * @param id string
   */
  public company(id) {
    return this.http.get('/sellerAccounts/' + id + '/companies');
  }

  /**
   * changePassword(oldPassword, newPassword)
   * change the loged seller account password
   *
   * @param {string} oldPassword
   * @param {string} newPassword
   * @returns Observable<any>
   * @memberof SellerAccountService
   */
  public changePassword(oldPassword: string, newPassword: string) {
    const data: any = {
      oldPassword: oldPassword,
      newPassword: newPassword,
    };
    return this.http.post('/sellerAccounts/change-password', data);
  }

}
