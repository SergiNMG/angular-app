import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { SimilarProductsComponent } from './components/similar-products/similar-products.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { AsideComponent } from './components/aside/aside.component';
import { ProductRoutingModule } from './product-routing.module';
import { CartComponent } from './components/cart/cart.component';
import { ProductComponent } from './product.component';
import { StarsRatingComponent } from "../../shared/stars-rating/stars-rating.component";

@NgModule({
  declarations: [
    ProductComponent,
    ProductViewComponent,
    SimilarProductsComponent,
    ReviewsComponent,
    AsideComponent,
    CartComponent
  ],
  exports: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    StarsRatingComponent
  ]
})
export class ProductModule { }
