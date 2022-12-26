import { Injectable } from '@angular/core';

import { Ingredients } from '../../interfaces/ingredients.interface';

@Injectable({
  providedIn: 'root',
})
export class IngredientsService {
  ingredientsList: Ingredients[] = [
    {
      name: 'meat',
      price: 1.5,
    },
    {
      name: 'cheese',
      price: 0.5,
    },
    {
      name: 'salad',
      price: 0.25,
    },
    {
      name: 'tomato',
      price: 0.35,
    },
    {
      name: 'lettuce',
      price: 0.3,
    },
    // {
    //   name: 'onion',
    //   price: 0.4,
    // },
  ];
}
