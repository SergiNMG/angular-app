import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FilterState } from 'src/app/interfaces/models/filterState';
import { Product } from 'src/app/interfaces/models/Product';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent {

  @Input() products!: Product[];
  @Input() selectedProduct!: Product;
  @Input() filterState!: FilterState | undefined;

  @Output() orderHighestPriceEvent = new EventEmitter<void>();
  @Output() orderLowestPriceEvent = new EventEmitter<void>();
  @Output() resetProductsFilterEvent = new EventEmitter<void>();
  @Output() selectProductEvent = new EventEmitter<Product>();
  @Output() showHigherPriceEvent = new EventEmitter<void>();

  orderHighestPrice() {
    this.orderHighestPriceEvent.emit();
  }

  orderLowestPrice() {
    this.orderLowestPriceEvent.emit();
  }

  resetProductsFilters() {
    this.resetProductsFilterEvent.emit();
  }

  selectProduct(product: Product) {
    this.selectProductEvent.emit(product);
  }

  showHigherPrice() {
    this.showHigherPriceEvent.emit();
  }
}
