import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HamburgerDiagramComponent } from './hamburger-diagram.component';

describe('HamburguerDiagramComponent', () => {
  let component: HamburgerDiagramComponent;
  let fixture: ComponentFixture<HamburgerDiagramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HamburgerDiagramComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HamburgerDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
