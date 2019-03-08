import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { products, IProduct } from '../product-list/product-list.component';

@Component({
  selector: 'app-comparison',
  templateUrl: './comparison.component.html',
  styleUrls: ['./comparison.component.css'],
})
export class ComparisonComponent implements OnInit {
  @Input() product: IProduct;
  @Output() interest = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
