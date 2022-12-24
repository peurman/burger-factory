import { Component, OnInit } from '@angular/core';

import { Ingredients } from './interfaces/ingredients.interface';
import { GroupedIngredients } from './interfaces/grouped-ingredients.interface';

@Component({
  selector: 'app-hamburgers',
  templateUrl: './hamburgers.component.html',
  styleUrls: ['./hamburgers.component.scss'],
})
export class HamburgersComponent implements OnInit {
  startedBurger: Ingredients[] = [];
  groupedIngredients: GroupedIngredients[] = [];
  finalPrice = 0;

  ngOnInit() {
    const storageBurger = localStorage.getItem('startedBurger');
    this.startedBurger = storageBurger ? JSON.parse(storageBurger) : [];
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
    ingredientsSelection.forEach(el => {
      newObj = {
        name: el.name,
        quantity: 1,
        price: el.price,
      };
      // if (this.groupedIngredients.length > 0) {
      //   this.groupedIngredients.forEach(elem => {
      //     elem.name === el.name
      //       ? ((elem.price += elem.price), elem.quantity++)
      //       : this.groupedIngredients.push(newObj);
      //   });
      // } else {
      this.groupedIngredients.push(newObj);
      // }
      this.finalPrice += el.price;
    });
  }
}
