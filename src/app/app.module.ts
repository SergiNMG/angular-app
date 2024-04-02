import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SimilarProductsComponent } from './components/similar-products/similar-products.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { AsideComponent } from './components/aside/aside.component';
import { StarsRatingComponent } from './components/stars-rating/stars-rating.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HeaderComponent,
    FooterComponent,
    SimilarProductsComponent,
    ReviewsComponent,
    AsideComponent,
    StarsRatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
