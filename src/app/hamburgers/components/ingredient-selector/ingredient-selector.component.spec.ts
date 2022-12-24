import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientSelectorComponent } from './ingredient-selector.component';

describe('IngredientSelectorComponent', () => {
  let component: IngredientSelectorComponent;
  let fixture: ComponentFixture<IngredientSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredientSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngredientSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
