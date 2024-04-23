import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Cart } from 'src/app/interfaces/models/cart';
import { FilterState } from 'src/app/interfaces/models/filterState';
import { Product } from 'src/app/interfaces/models/Product';
import { CartService } from 'src/app/services/cart/cart.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products!: Product[];
  productsList!: Product[];
  defaultPosition: number = 1;
  product: Product = {} as Product;

  filterState: FilterState = {
    'filterHigh': false,
    'filterLow': false,
    'showHighProducts': false,
    'resetProductsFilter': false
  };

  private productServiceSubscription: Subscription | null = null;

  constructor(private productService: ProductService,
    private cartService: CartService) { }

  ngOnInit() {
    // this.productService.getProducts();
    this.suscribeProductsService();
  }

  ngOnDestroy() {
    this.productServiceSubscription?.unsubscribe();
  }

  suscribeProductsService() {
    this.productServiceSubscription = this.productService.products$.subscribe({
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
    this.productService.deleteProduct(product);
    this.setDefaultProduct();
    this.cartService.deleteFromCart(product);
  }

  changeFavoriteValue(favorite: boolean) {
    this.product.favorite = !favorite;
  }

  setFilters(filterName: keyof FilterState) {
    this.filterActions[filterName]();
    this.changeFilterValue(filterName);
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
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
