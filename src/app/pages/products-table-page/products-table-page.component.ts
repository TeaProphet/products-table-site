import {Component, OnInit} from '@angular/core';
import {Observable, tap} from "rxjs";
import {IProduct} from "../../models/product";
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-products-table-page',
  templateUrl: 'products-table-page.component.html',
  styleUrls: ['./products-table-page.component.css']
})
export class ProductsTablePageComponent implements OnInit {
  title = 'таблица товаров';
  loading: boolean = true

  constructor(public productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.productsService.getAll().subscribe(() => this.loading = false)
  }
}
