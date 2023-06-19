import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit{
  loading: boolean = true

  constructor(private route: ActivatedRoute, public productsService: ProductsService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productsService.get(params['id']).subscribe(() => this.loading = false)
    });
  }
}
