import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import mockProducts from './models/products.mock';
import { Product, ProductBase } from './models/product';
import { FilterState } from './models/filterState';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

}
