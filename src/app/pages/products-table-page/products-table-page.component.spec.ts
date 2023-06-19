import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsTablePageComponent } from './products-table-page.component';

describe('ProductsTablePageComponent', () => {
  let component: ProductsTablePageComponent;
  let fixture: ComponentFixture<ProductsTablePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsTablePageComponent]
    });
    fixture = TestBed.createComponent(ProductsTablePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
