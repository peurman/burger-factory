import { Component } from '@angular/core';
import { ingredientsList } from '../../services/ingredients';
import { Ingredients } from '../../interfaces/ingredients.interface';

@Component({
  selector: 'app-ingredient-selector',
  templateUrl: './ingredient-selector.component.html',
  styleUrls: ['./ingredient-selector.component.scss'],
})
export class IngredientSelectorComponent {
  ingredientsTypes: Ingredients[] = ingredientsList;
}
