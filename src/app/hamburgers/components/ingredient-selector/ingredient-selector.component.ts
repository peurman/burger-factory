import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Ingredients } from '../../interfaces/ingredients.interface';

import { IngredientsService } from '../../services/ingredients/ingredients.service';

@Component({
  selector: 'app-ingredient-selector',
  templateUrl: './ingredient-selector.component.html',
  styleUrls: ['./ingredient-selector.component.scss'],
})
export class IngredientSelectorComponent {
  constructor(public ingredientsService: IngredientsService) {}

  @Input() ingredientsSelected: Ingredients[] = [];

  @Output() updateList: EventEmitter<Ingredients[]> = new EventEmitter();

  handleAddIngredient(ingredientObject: Ingredients) {
    this.ingredientsSelected.push(ingredientObject);
    this.updateList.emit(this.ingredientsSelected);
  }

  handleRemoveIngredient(ingredientObject: Ingredients) {
    let indexToRemove = 0;
    indexToRemove = this.ingredientsSelected
      .map(el => el.name)
      .lastIndexOf(ingredientObject.name);
    if (indexToRemove > -1) this.ingredientsSelected.splice(indexToRemove, 1);

    this.updateList.emit(this.ingredientsSelected);
  }

  checkDisabled(ingredientsArray: Ingredients[], ingredientName: string) {
    if (ingredientsArray.filter(el => el.name === ingredientName).length > 0)
      return false;
    return true;
  }
}
