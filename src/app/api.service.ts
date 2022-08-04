import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, Observable } from 'rxjs';
import { Drink } from './drink';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getCocktailsByName(name){
    return this.http.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+name)
  }

  getCocktailByFirstLetter(firstLetter){
    return this.http.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?f="+firstLetter)
  }

  getRandomCocktail(){
    return this.http.get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
  }
}
