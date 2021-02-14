import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CATEGORIES } from 'src/app/products';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() filterChanged = new EventEmitter<string>();
  selectedCategory = "";
  constructor() { }

  ngOnInit(): void { }

  categories =CATEGORIES; //filtered categories


  applyFilter(){
    this.filterChanged.emit(this.selectedCategory);
  }

}
