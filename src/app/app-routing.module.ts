import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListaCocktailRandomComponent } from './lista-cocktail-random/lista-cocktail-random.component';
import { ListaLetteraCocktailComponent } from './lista-lettera-cocktail/lista-lettera-cocktail.component';
import { ListaNomeCocktailComponent } from './lista-nome-cocktail/lista-nome-cocktail.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "cocktail-list-by-name",
    component: ListaNomeCocktailComponent
  },
  {
    path: "cocktail-list-by-name/:nomeCocktail",
    component: ListaNomeCocktailComponent
  },
  {
    path: "cocktail-list-by-letter",
    component: ListaLetteraCocktailComponent
  },
  {
    path: "cocktail-list-by-letter/:primaLettera",
    component: ListaLetteraCocktailComponent
  },
  {
    path: "random-cocktail-list",
    component: ListaCocktailRandomComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
