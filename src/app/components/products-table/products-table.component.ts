import {Component, Input} from '@angular/core';
import {IProduct} from "../../models/product";
import {Router} from "@angular/router";

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['products-table.component.css']
})
export class ProductsTableComponent {
  @Input() products: IProduct[]

  constructor(private router: Router) {
  }

  handleRowClick() {
    this.router.navigate(['/']);
  }
}
