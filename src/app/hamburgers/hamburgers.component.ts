import { Component, OnInit } from '@angular/core';

import { Ingredients } from './interfaces/ingredients.interface';
import { GroupedIngredients } from './interfaces/grouped-ingredients.interface';
import { ingredientsList } from './services/ingredients';

@Component({
  selector: 'app-hamburgers',
  templateUrl: './hamburgers.component.html',
  styleUrls: ['./hamburgers.component.scss'],
})
export class HamburgersComponent implements OnInit {
  startedBurger: Ingredients[] = [];
  groupedIngredients: GroupedIngredients[] = [];
  finalPrice = 0;
  basePrice = 1;

  ngOnInit() {
    const storageBurger = localStorage.getItem('startedBurger');
    this.startedBurger = storageBurger ? JSON.parse(storageBurger) : [];
    this.groupIngredients(this.startedBurger);
  }
  handleNewIngredientList(event: Ingredients[]) {
    this.startedBurger = event;
    localStorage.setItem('startedBurger', JSON.stringify(this.startedBurger));
    this.groupIngredients(this.startedBurger);
  }

  groupIngredients(ingredientsSelection: Ingredients[]) {
    this.groupedIngredients = [];
    this.finalPrice = 0;
    let newObj: GroupedIngredients = {
      name: '',
      price: 0,
      quantity: 0,
    };
    // grouping ingredient - quantity
    const groupedObj: { [key: string]: number } = {};
    ingredientsSelection.forEach(el => {
      groupedObj[el.name] = (groupedObj[el.name] || 0) + 1;
      this.finalPrice += el.price;
    });
    this.finalPrice = this.finalPrice + this.basePrice;
    // adding price and push
    for (const [key, value] of Object.entries(groupedObj)) {
      newObj = {
        name: key,
        quantity: value,
        price: 0,
      };
      ingredientsList.forEach(elem => {
        if (key === elem.name) newObj.price = value * elem.price;
      });
      this.groupedIngredients.push(newObj);
    }
  }
}
