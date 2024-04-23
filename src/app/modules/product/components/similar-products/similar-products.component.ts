import { Component, Input } from '@angular/core';
import { Product } from 'src/app/interfaces/models/Product';
@Component({
  selector: 'app-similar-products',
  templateUrl: './similar-products.component.html',
  styleUrls: ['./similar-products.component.scss']
})
export class SimilarProductsComponent {
  @Input() product!: Product;
}
