import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ListaNomeCocktailComponent } from './lista-nome-cocktail/lista-nome-cocktail.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ListaLetteraCocktailComponent } from './lista-lettera-cocktail/lista-lettera-cocktail.component';
import { ListaCocktailRandomComponent } from './lista-cocktail-random/lista-cocktail-random.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ListaNomeCocktailComponent,
    ListaLetteraCocktailComponent,
    ListaCocktailRandomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
