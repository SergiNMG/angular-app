import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FilterState } from 'src/app/models/filterState';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent {
  selectedProductId: number | null = null;

  @Input() products!: Product[];
  @Input() product!: Product;
  @Input() filterState!: FilterState | undefined;

  @Output() orderHighestPriceEvent = new EventEmitter<void>();
  @Output() orderLowestPriceEvent = new EventEmitter<void>();
  @Output() resetProductsFilterEvent = new EventEmitter<void>();
  @Output() selectProductEvent = new EventEmitter<number>();
  @Output() showHigherPriceEvent = new EventEmitter<void>();

  orderHighestPrice() {
    this.orderHighestPriceEvent.emit();
  }

  orderLowestPrice() {
    this.orderLowestPriceEvent.emit();
  }

  resetProductsFilters(){
    this.resetProductsFilterEvent.emit();
  }

  selectProduct(id: number){
    this.selectedProductId = id;
    this.selectProductEvent.emit(id);
  }

  showHigherPrice(){
    this.showHigherPriceEvent.emit();
  }
}
