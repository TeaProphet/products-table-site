import {Component, OnInit} from '@angular/core';
import {Observable, tap} from "rxjs";
import {IProduct} from "../../models/product";
import {ProductsService} from "../../services/products.service";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-products-table-page',
  templateUrl: 'products-table-page.component.html',
  styleUrls: ['./products-table-page.component.css']
})
export class ProductsTablePageComponent implements OnInit {
  title = 'Таблица Товаров';
  loading: boolean = true

  constructor(public productsService: ProductsService, private titleService: Title) {
  }

  ngOnInit(): void {
    this.titleService.setTitle(this.title)
    this.productsService.getAll().subscribe(() => this.loading = false)
  }
}
