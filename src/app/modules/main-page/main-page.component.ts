import { Component, OnInit } from '@angular/core';
import { FilterState } from 'src/app/models/filterState';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  products!: Product[];
  productsList!: Product[];
  defaultPosition: number = 1;
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

  constructor(private productService: ProductService) { }

  //definir funciones para el ngOnInit, no asignaciones
  ngOnInit() {
    this.productService.getProducts();
    //this.products = mockProducts;
    this.suscribeProductsService();
  }

  suscribeProductsService() {
    this.productService.products$.subscribe({
      next: products => {
        this.products = products;
        this.setDefaultProduct();
        this.setProductsCopy();
      },
      error: error => {
        console.error('Error searching products:', error);
      }
    });
  }

  selectProduct(product: Product): Product {
    return this.product = product;
  }

  deleteProduct(product: Product) {
    this.products = this.products.filter(p => p !== product);
    this.setProductsCopy();
    this.setDefaultProduct();
  }

  changeFavoriteValue(favorite: boolean) {
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

  private setDefaultProduct() {
    this.product = this.products[0];
  }

  private setProductsCopy() {
    this.productsList = [...this.products];
  }

}
