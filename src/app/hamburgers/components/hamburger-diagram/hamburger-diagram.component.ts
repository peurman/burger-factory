import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hamburger-diagram',
  templateUrl: './hamburger-diagram.component.html',
  styleUrls: ['./hamburger-diagram.component.scss']
})
export class HamburgerDiagramComponent {
  @Input() startedHamburger!: string[]


}
