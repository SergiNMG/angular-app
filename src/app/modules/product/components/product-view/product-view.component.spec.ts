import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductViewComponent } from './product-view.component';
import { ProductComponent } from '../../product.component';
import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces/models/Product';
import { IProductBaseContract, IProductContract, ISimilarProductContract } from 'src/app/interfaces/contracts/IProductContract';
import { IReviewContract } from 'src/app/interfaces/contracts/IReviewContract';
import { Review } from 'src/app/interfaces/models/Review';
import { SimilarProduct } from 'src/app/interfaces/models/SimilarProduct';
import { StarsRatingComponent } from 'src/app/shared/stars-rating/stars-rating.component';

fdescribe('ProductViewComponent', () => {
  let component: ProductViewComponent;
  let fixture: ComponentFixture<ProductViewComponent>;
  const productMock: Product = {
    id: 1,
    name: 'Gygabite 3060 Ti',
    price: 399,
    currency: '$',
    rating: 4,
    description: 'RTX 12 GB',
    favorite: false,
    similarProducts: [],
    reviews: [],
    toReviewList: () => [],
    toSimilarProductsList: () => []
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductViewComponent, ProductComponent],
      imports: [StarsRatingComponent]
    });
    fixture = TestBed.createComponent(ProductViewComponent);
    component = fixture.componentInstance;
    component.product = productMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show product attributes', () => {
    const productViewElement: HTMLElement = fixture.nativeElement;

    expect(productViewElement.textContent).toContain(`${productMock.id}`);
    expect(productViewElement.textContent).toContain(productMock.name);
    expect(productViewElement.textContent).toContain(`${productMock.price}`);

    expect(component.product.id).toEqual(productMock.id);
    expect(component.product.name).toEqual(productMock.name);
    expect(component.product.price).toEqual(productMock.price);
  });

  it('should emit deleteProductEvent when deleteProduct is clicked', () => {
    const deleteSpy = spyOn(component.deleteProductEvent, 'emit');
    //fixture.nativeElement.querySelector('button').click();
    component.deleteProduct(component.product);
    expect(deleteSpy).toHaveBeenCalled();
  });

  it('should emit addToWishListEvent when addToWishList is clicked', () => {
    const addToWishListSpy = spyOn(component.addToWishListEvent, 'emit');
    //fixture.nativeElement.querySelector('button').click();
    component.addToWishList(component.product.favorite);
    expect(addToWishListSpy).toHaveBeenCalled();
  });

  it('should emit addToCartEvent when addToCart is clicked', () => {
    const addToCartSpy = spyOn(component.addToCartEvent, 'emit');
    //fixture.nativeElement.querySelector('button').click();
    component.addToCart(component.product);
    expect(addToCartSpy).toHaveBeenCalled();
  });
});
