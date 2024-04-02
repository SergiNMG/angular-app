import { Component, Input } from '@angular/core';
import mockProducts from './models/products.mock';
import { Product, ProductBase } from './models/product';
import { findIndex } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
    favorite: false,
    similarProducts: [],
    reviews: []
  };
  defaultPosition: number = 0;

  ngOnInit(){
    this.products = mockProducts;
    this.product = this.products[this.defaultPosition];
    this.productsList = this.products.slice();
  }

  findProduct(id: number): Product{
    let position = this.products.findIndex(p => p.id === id);
    return this.product = this.products[position]; 
  }

  selectProduct(id: number){
    this.findProduct(id);
  }

  orderHighestPrice() {
    this.products.sort((a, b) => b.price - a.price);
  }

  resetFilter() {
    this.products = this.productsList.slice();
  }

  deleteProduct(id: Number){
    this.products = this.products.filter(p => p.id != id);
    this.productsList = this.products.slice();

    this.product = this.productsList[this.defaultPosition];
  }

  changeFavorite(favorite: boolean){
    this.product.favorite = !favorite;
  }
}
