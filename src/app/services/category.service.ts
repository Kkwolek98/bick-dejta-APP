import { Category } from './../models/Category';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { urls } from './urls';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private http: HttpClient,
  ) { }

  getCategoriesWithGmaesById(id: number): Observable<Category> {
    return this.http.get<Category>(urls.API + "/category/" + id);
  }
}
