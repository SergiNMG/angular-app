import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { SimilarProductsComponent } from './components/similar-products/similar-products.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { AsideComponent } from './components/aside/aside.component';
import { MainPageComponent } from './main-page.component';
import { StarsRatingComponent } from '../shared/components/stars-rating/stars-rating.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductComponent,
    SimilarProductsComponent,
    ReviewsComponent,
    AsideComponent,
    MainPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class MainPageModule { }
