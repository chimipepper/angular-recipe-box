import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  API_URL = 'http://localhost:3000/recipes';
  constructor(private http: HttpClient) {}
  getRecipes(){
    return this.http.get(this.API_URL);
  }
  addRecipes(recipe){
    return this.http.post(this.API_URL, recipe);
  }
}
