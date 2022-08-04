import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaNomeCocktailComponent } from './lista-nome-cocktail.component';

describe('ListaNomeCocktailComponent', () => {
  let component: ListaNomeCocktailComponent;
  let fixture: ComponentFixture<ListaNomeCocktailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaNomeCocktailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaNomeCocktailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
