import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-lista-lettera-cocktail',
  templateUrl: './lista-lettera-cocktail.component.html',
  styleUrls: ['./lista-lettera-cocktail.component.scss']
})
export class ListaLetteraCocktailComponent implements OnInit {

  primaLettera: string|null;
  drinksByLetter: any;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.primaLettera = params.get('primaLettera');
    })
   }

  ngOnInit(): void {
    this.getDrinksByLetter()
  }

  getDrinksByLetter(){
    this.apiService.getCocktailByFirstLetter(this.primaLettera).subscribe(
      (results)=>{
        this.drinksByLetter=results;
        this.drinksByLetter = this.drinksByLetter.drinks;
        console.log(this.drinksByLetter);
      }
    )
  }

}
