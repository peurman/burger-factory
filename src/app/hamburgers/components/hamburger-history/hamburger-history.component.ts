import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Ingredients } from '../../interfaces/ingredients.interface';

@Component({
  selector: 'app-hamburger-history',
  templateUrl: './hamburger-history.component.html',
  styleUrls: ['./hamburger-history.component.scss'],
})
export class HamburgerHistoryComponent {
  @Input() burgersOrdered: Array<Ingredients[]> = [];

  @Output() oldBurgerChosen: EventEmitter<number> = new EventEmitter();

  handleSelect(event: Event) {
    const eventValue = (<unknown>(
      (event.target as HTMLInputElement).value
    )) as number;
    this.oldBurgerChosen.emit(eventValue);
  }
}
