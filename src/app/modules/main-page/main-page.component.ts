import { Component, OnInit } from '@angular/core';
import { FilterState } from 'src/app/models/filterState';
import { Product } from 'src/app/models/product';
import mockProducts from 'src/app/models/products.mock';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  products!: Product[];
  productsList!: Product[];
  defaultPosition: number = 0;
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

  filterState: FilterState = {
    'filterHigh': false,
    'filterLow': false,
    'showHighProducts': false,
    'resetProductsFilter': false
  };
  actualFilter: string = '';

  ngOnInit() {
    this.products = mockProducts;
    this.product = this.products[this.defaultPosition];
    this.productsList = [...this.products];
  }

  findProduct(id: number): Product {
    let position = this.products.findIndex(p => p.id === id);
    return this.product = this.products[position];
  }

  selectProduct(id: number) {
    this.findProduct(id);
  }

  deleteProduct(id: Number) {
    this.products = this.products.filter(p => p.id != id);
    this.productsList = this.products;
    this.product = this.productsList[this.defaultPosition];
  }

  changeFavorite(favorite: boolean) {
    this.product.favorite = !favorite;
  }

  setFilters(filterName: keyof FilterState) {
    this.filterActions[filterName]();
    this.changeFilterValue(filterName);
  }

  changeFilterValue(filterName: keyof FilterState) {
    this.filterState[filterName] = !this.filterState[filterName];
    Object.keys(this.filterState).forEach(name => {
      if (name !== filterName) {
        this.filterState[name as keyof FilterState] = false;
      }
    });
  }

  private filterActions: { [name in keyof FilterState]: () => void } = {
    filterHigh: () => {
      this.products = this.products.sort((a, b) => b.price - a.price);
    },
    filterLow: () => {
      this.products = this.products.sort((a, b) => a.price - b.price);
    },
    showHighProducts: () => {
      this.products = this.products.filter(p => p.price > 649);
    },
    resetProductsFilter: () => {
      this.products = [...this.productsList];
    }
  };
}
