import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  nomeCocktail : string|null = "";
  primaLettera: string|null = "";

  constructor(private route: ActivatedRoute, private router: Router) { 
  }

  ngOnInit(): void {
  }

  goToCocktailListByName(){
    this.router.navigate(["/cocktail-list-by-name/"+this.nomeCocktail])
  }

  goToCocktailListByLetter(){
    this.router.navigate(["/cocktail-list-by-letter/"+this.primaLettera])
  }

}
