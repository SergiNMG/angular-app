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
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductComponent,
    ProductViewComponent,
    SimilarProductsComponent,
    ReviewsComponent,
    AsideComponent,
    CartComponent,
    AddProductComponent
  ],
  exports: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    StarsRatingComponent,
    FooterComponent,
    ReactiveFormsModule
  ]
})
export class ProductModule { }
