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

  currencyExchangeRate = 1;

  handleSelect(event: Event) {
    const eventValue = (event.target as HTMLInputElement).value;
    switch (eventValue) {
      case 'USD':
        this.currencyExchangeRate = 1;
        break;
      case 'ARS':
        this.currencyExchangeRate = 300;
        break;
      case 'MXN':
        this.currencyExchangeRate = 50;
        break;
      default:
        this.currencyExchangeRate = 1;
        break;
    }
  }
}
