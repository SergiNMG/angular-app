import { Component } from '@angular/core';
import mockProducts from './models/products.mock';
import { Product, ProductBase } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-app';
  products!: Product[];
  productsList!: Product[];
  product: Product = 
  {
    id: 0,
    name: "",
    price: 0,
    currency: "",
    rating: 0,
    description: "",
    similarProducts: [],
    reviews: []
  };

  ngOnInit(){
    this.products = mockProducts;
    this.product = this.products[0];
    this.productsList = this.products.slice();
    console.log(this.product);
  }

  selectProduct(id: Number){
    console.log(id);
    let pos = this.products.findIndex(p => p.id == id);
    this.product = this.products[pos];
    console.log(this.product);
  }

  orderHighestPrice() {
    this.products.sort((a, b) => b.price - a.price);
    console.log(this.products);
    console.log(this.productsList);
  }

  resetFilter() {
    this.products = this.productsList.slice();
  }

  deleteProduct(id: Number){
    this.products = this.products.filter(p => p.id != id);
    this.productsList = this.products.slice();

    this.product = this.productsList[0];
    console.log(this.products);
  }


}
