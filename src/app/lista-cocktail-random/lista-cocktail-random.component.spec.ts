import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCocktailRandomComponent } from './lista-cocktail-random.component';

describe('ListaCocktailRandomComponent', () => {
  let component: ListaCocktailRandomComponent;
  let fixture: ComponentFixture<ListaCocktailRandomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCocktailRandomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCocktailRandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
