import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products, IProduct } from "../product-list/product-list.component";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  private _route: ActivatedRoute;
  public product: IProduct;

  constructor(route: ActivatedRoute) {
    this._route = route;
  }

  ngOnInit() {
    this.product = products[this._route.snapshot.params.id];
  }

}
