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
    const { apiUrl } = environment;

    return this.http.get<Dish[]>(`${apiUrl}/recipes`);
  }

  getSingleDish(id: string) {
    const { apiUrl } = environment;
    this.http.get<Dish>(`${apiUrl}/dishes/${id}`);
  }

  createDish(dishTitle: string, postIngredients: string, postSteps: string) {
    return this.http.post<Dish>('http://localhost:3030/jsonstore/recipes', {
      dishTitle,
      postIngredients,
      postSteps,
    });
  }
}
