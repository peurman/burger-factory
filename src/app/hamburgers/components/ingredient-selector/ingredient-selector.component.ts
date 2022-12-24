import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ingredientsList } from '../../services/ingredients';
import { Ingredients } from '../../interfaces/ingredients.interface';

@Component({
  selector: 'app-ingredient-selector',
  templateUrl: './ingredient-selector.component.html',
  styleUrls: ['./ingredient-selector.component.scss'],
})
export class IngredientSelectorComponent {
  ingredientsTypes: Ingredients[] = ingredientsList;

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
}
