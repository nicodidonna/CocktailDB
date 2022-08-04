import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-lista-cocktail-random',
  templateUrl: './lista-cocktail-random.component.html',
  styleUrls: ['./lista-cocktail-random.component.scss']
})
export class ListaCocktailRandomComponent implements OnInit {

  randomDrink : any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getRandomDrink();
  }

  getRandomDrink(){
    this.apiService.getRandomCocktail().subscribe(
      (results)=>{
        this.randomDrink = results;
        this.randomDrink = this.randomDrink.drinks
        console.log(this.randomDrink);
    })
  }

}
