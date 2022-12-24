import { Component, OnInit } from '@angular/core';

import { Ingredients } from './interfaces/ingredients.interface';

@Component({
  selector: 'app-hamburgers',
  templateUrl: './hamburgers.component.html',
  styleUrls: ['./hamburgers.component.scss'],
})
export class HamburgersComponent implements OnInit {
  startedBurger: Ingredients[] = [];
  ngOnInit() {
    // const storageBurger = localStorage.getItem('startedBurger');
    // this.startedBurger =
    //   storageBurger !== null ? JSON.parse(storageBurger) : [];
    console.log(localStorage.getItem('startedBurger'));
  }
  handleNewIngredientList(event: Ingredients[]) {
    this.startedBurger = event;
  }
}
