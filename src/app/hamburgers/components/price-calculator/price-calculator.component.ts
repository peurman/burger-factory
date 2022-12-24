import { Component, Input } from '@angular/core';

import { GroupedIngredients } from '../../interfaces/grouped-ingredients.interface';

@Component({
  selector: 'app-price-calculator',
  templateUrl: './price-calculator.component.html',
  styleUrls: ['./price-calculator.component.scss'],
})
export class PriceCalculatorComponent {
  @Input() ingredientsSelected: GroupedIngredients[] = [];
  @Input() totalPrice = 0;
}
