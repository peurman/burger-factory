import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HamburgersComponent } from './hamburgers.component'

describe('HamburgersComponent', () => {
  let component: HamburgersComponent;
  let fixture: ComponentFixture<HamburgersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HamburgersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HamburgersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
