import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from '../models/company';

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
}
