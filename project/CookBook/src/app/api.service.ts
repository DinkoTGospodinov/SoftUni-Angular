import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Dish } from './types/dishes';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getDishes() {
    const {apiUrl} = environment;

    return this.http.get<Dish[]>(`${apiUrl}/recipes`)
  }


  getSingleDish() {}
}
