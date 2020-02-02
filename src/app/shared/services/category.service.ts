import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  public create(data: Category) {
    return this.http.post('/categories', data);
  }

  public get(id: any, filter = {}) {
    return this.http.get('/categories/' + id + '?filter=' + JSON.stringify(filter));
  }

  public update(id: any, data: any) {
    return this.http.patch('/categories/' + id, data);
  }

  public delete(id: any) {
    return this.http.delete('/categories/' + id);
  }

  public fetchAll(filter = {}) {
    return this.http.get<any>('/categories?filter=' + encodeURI(JSON.stringify(filter)));
  }

  public exist(id) {
    this.http.get<any>('/categories/' + id + '/exists');
  }
}
