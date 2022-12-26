import { Component, OnInit, ViewChild } from '@angular/core';

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
  burgersHistory: Array<Ingredients[]> = [];
  finalPrice = 0;
  basePrice = 1;

  ngOnInit() {
    // last selection
    const storageBurger = localStorage.getItem('startedBurger');
    this.startedBurger = storageBurger ? JSON.parse(storageBurger) : [];
    this.groupIngredients(this.startedBurger);
    // burgers history
    const storageHistory = localStorage.getItem('burgersHistory');
    this.burgersHistory = storageHistory ? JSON.parse(storageHistory) : [];

    // 'remove' buttons state
    // this.startedBurger?.forEach(el => {
    //   if (el.name === 'meat')
    //     document.getElementById(el.name).disabled = 'true';
    // });
  }

  handleNewIngredientList(ingredientsSelected: Ingredients[]) {
    this.startedBurger = ingredientsSelected;
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

  handleOrderedBurger(burgerOrder: Ingredients[]) {
    alert('Your burger has been ordered!');
    this.burgersHistory.push(burgerOrder);
    localStorage.setItem('burgersHistory', JSON.stringify(this.burgersHistory));
    this.startedBurger = [];
    localStorage.setItem('startedBurger', JSON.stringify(this.startedBurger));
    this.groupIngredients(this.startedBurger);

    (document.getElementById('historyOfBurgers') as HTMLSelectElement).value =
      '';
  }

  handleOldBurgerSelected(value: number) {
    this.startedBurger = this.burgersHistory[value];
    this.groupIngredients(this.startedBurger);
  }
}
