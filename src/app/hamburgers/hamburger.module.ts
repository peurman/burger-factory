import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HamburgersComponent } from './hamburgers.component';
import { IngredientSelectorComponent } from './components/ingredient-selector/ingredient-selector.component';
import { PriceCalculatorComponent } from './components/price-calculator/price-calculator.component';
import { HamburgerDiagramComponent } from './components/hamburger-diagram/hamburger-diagram.component';
import { HamburgerOrderComponent } from './components/hamburger-order/hamburger-order.component';
import { HamburgerHistoryComponent } from './components/hamburger-history/hamburger-history.component';

@NgModule({
  declarations: [
    HamburgersComponent,
    IngredientSelectorComponent,
    PriceCalculatorComponent,
    HamburgerDiagramComponent,
    HamburgerOrderComponent,
    HamburgerHistoryComponent,
  ],
  imports: [CommonModule],
  exports: [HamburgersComponent],
  providers: [],
  bootstrap: [],
})
export class HamburgersModule {}
