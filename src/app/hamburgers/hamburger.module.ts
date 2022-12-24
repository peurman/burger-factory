import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import { HamburgersComponent } from './hamburgers.component';
import { IngredientSelectorComponent } from './components/ingredient-selector/ingredient-selector.component';
import { PriceCalculatorComponent } from './components/price-calculator/price-calculator.component';
import { HamburgerDiagramComponent } from './components/hamburger-diagram/hamburger-diagram.component';

@NgModule({
  declarations: [
    HamburgersComponent,
    IngredientSelectorComponent,
    PriceCalculatorComponent,
    HamburgerDiagramComponent,
  ],
  imports: [CommonModule  ],
  exports: [HamburgersComponent],
  providers: [],
  bootstrap: []
})
export class HamburgersModule{ }
