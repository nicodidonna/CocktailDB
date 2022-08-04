import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaLetteraCocktailComponent } from './lista-lettera-cocktail.component';

describe('ListaLetteraCocktailComponent', () => {
  let component: ListaLetteraCocktailComponent;
  let fixture: ComponentFixture<ListaLetteraCocktailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaLetteraCocktailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaLetteraCocktailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
