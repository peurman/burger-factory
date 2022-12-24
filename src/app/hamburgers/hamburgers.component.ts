import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hamburgers',
  templateUrl: './hamburgers.component.html',
  styleUrls: ['./hamburgers.component.scss'],
})
export class HamburgersComponent implements OnInit {
  startedBurger: string[] = [];
  ngOnInit() {
    const storageBurger = localStorage.getItem('startedBurger');
    this.startedBurger =
      storageBurger !== null ? JSON.parse(storageBurger) : [];
  }
}
