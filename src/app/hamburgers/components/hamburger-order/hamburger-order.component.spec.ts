import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HamburgerOrderComponent } from './hamburger-order.component';

describe('HamburgerOrderComponent', () => {
  let component: HamburgerOrderComponent;
  let fixture: ComponentFixture<HamburgerOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HamburgerOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HamburgerOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
