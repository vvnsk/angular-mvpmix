import { Injectable } from '@angular/core';
import { IProduct } from './product-list/product-list.component';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart = [];

  constructor() {}

  add(product: IProduct) {
    this.cart.push(product);
    console.log(this.cart);
  }
}
