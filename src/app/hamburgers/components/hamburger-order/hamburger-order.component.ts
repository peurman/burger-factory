import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Ingredients } from '../../interfaces/ingredients.interface';

@Component({
  selector: 'app-hamburger-order',
  templateUrl: './hamburger-order.component.html',
  styleUrls: ['./hamburger-order.component.scss'],
})
export class HamburgerOrderComponent {
  @Input() burgerToOrder: Ingredients[] = [];

  @Output() burgerOrdered: EventEmitter<Ingredients[]> = new EventEmitter();

  handleClick() {
    this.burgerOrdered.emit(this.burgerToOrder);
  }
}
