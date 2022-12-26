import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HamburgerHistoryComponent } from './hamburger-history.component';

describe('HamburgerHistoryComponent', () => {
  let component: HamburgerHistoryComponent;
  let fixture: ComponentFixture<HamburgerHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HamburgerHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HamburgerHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
