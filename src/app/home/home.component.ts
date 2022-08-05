import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location } from "@angular/common";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  nomeCocktail : string|null = "";
  primaLettera: string|null = "";
  nomeVuoto: boolean;
  letteraVuota: boolean;
  form : FormGroup;

  constructor(private route: ActivatedRoute, private router: Router, private location: Location, private fb : FormBuilder) { 
    this.form = fb.group({
      'lettera' : ["",Validators.maxLength(1)]
    })
  }

  ngOnInit(): void {
    this.location.replaceState("/");
  }

  goToCocktailListByName(){
    if(this.nomeCocktail == ""){
      this.nomeVuoto = true;
    } else {
      this.nomeVuoto = false;
      this.router.navigate(["/cocktail-list-by-name/"+this.nomeCocktail]);
    }
  }

  goToCocktailListByLetter(){
    if(this.primaLettera == ""){
      this.letteraVuota = true;
    } else {
      this.letteraVuota = false;
      this.router.navigate(["/cocktail-list-by-letter/"+this.primaLettera]);
    }
    
  }

}
