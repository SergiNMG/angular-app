import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent {

  @Input() products!: Product[];
  @Input() product!: Product;

  @Output() orderHighestPriceEvent = new EventEmitter<void>();
  @Output() resetFilterEvent = new EventEmitter<void>();
  @Output() selectProductEvent = new EventEmitter<number>();

  selectedProductId: number | null = null;

  orderHighestPrice() {
    this.orderHighestPriceEvent.emit();
  }

  resetFilter(){
    this.resetFilterEvent.emit();
  }

  selectProduct(id: number){
    this.selectedProductId = id;
    this.selectProductEvent.emit(id);
    console.log(id);
  }

}
