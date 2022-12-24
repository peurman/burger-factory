import { Component, Input } from '@angular/core';

import { Ingredients } from '../../interfaces/ingredients.interface';

@Component({
  selector: 'app-hamburger-diagram',
  templateUrl: './hamburger-diagram.component.html',
  styleUrls: ['./hamburger-diagram.component.scss'],
})
export class HamburgerDiagramComponent {
  @Input() startedHamburger!: Ingredients[];
}
