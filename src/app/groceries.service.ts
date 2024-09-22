import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Grocery } from '../models/grocery.model';

@Injectable({
  providedIn: 'root'
})
export class GroceriesService {

  apiUrl = 'http://localhost:5000/groceries';

  constructor(private http: HttpClient) { }

  fetchAllGroceries() {
    return this.http.get(this.apiUrl);
  }
}
