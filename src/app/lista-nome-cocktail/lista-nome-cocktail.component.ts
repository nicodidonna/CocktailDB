import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-lista-nome-cocktail',
  templateUrl: './lista-nome-cocktail.component.html',
  styleUrls: ['./lista-nome-cocktail.component.scss']
})
export class ListaNomeCocktailComponent implements OnInit {

  nomeCocktail : string|null = "";
  primaLettera: string|null = "";
  drinksByName : any;

  constructor(private route: ActivatedRoute, private apiService: ApiService) { 
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.nomeCocktail = params.get('nomeCocktail');
    })
  }

  ngOnInit(): void {
    this.getDrinksByName();
  }

  getDrinksByName(){
    this.apiService.getCocktailsByName(this.nomeCocktail).subscribe(
      (results)=>{
        this.drinksByName = results;
        this.drinksByName = this.drinksByName.drinks;
        console.log(this.drinksByName);
      }
    )
  }

}
