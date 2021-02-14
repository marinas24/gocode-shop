import { Component, Input, OnInit } from '@angular/core';
import { PRODUCTS } from '../../products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }
  @Input() cat:string="";

  products = PRODUCTS;

}
