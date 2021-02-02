import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from './products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
 
 // title = 'gocode-shop';
  //text = "";
  
  //onBtnClick(): void {
  //  this.text = this.text ? '' : this.text = "Good job"
  groupBy = (xs:any[], key:string) => xs.reduce((rv, x) => {
    (rv[x[key]] = true || []);
    return rv;
  }, {});
   

  products = PRODUCTS;
  categories = Object.keys(this.groupBy(this.products, 'category'));
  }


