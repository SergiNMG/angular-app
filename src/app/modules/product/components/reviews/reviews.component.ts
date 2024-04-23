import { Component, Input } from '@angular/core';
import { Product } from 'src/app/interfaces/models/Product';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent {
  @Input() product!: Product;
}
