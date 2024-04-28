import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { inject } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';
import { ICart } from 'src/app/interfaces/ICart';
import { Observable, never, of, throwError } from 'rxjs';
import { Product } from 'src/app/interfaces/models/Product';
import { MatBadge } from '@angular/material/badge';

fdescribe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let service: CartService;
  const cartListMock: ICart = {
    productList: [{
      product: {
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
      },
      quantity: 1
    },
    {
      product: {
        id: 2,
        name: 'Gygabite 3070 Ti',
        price: 399,
        currency: '$',
        rating: 4.5,
        description: 'RTX 8 GB',
        favorite: false,
        similarProducts: [],
        reviews: [],
        toReviewList: () => [],
        toSimilarProductsList: () => []
      },
      quantity: 2
    }]
  };
  const CartServiceMock = {
    cart$: of(cartListMock),
    getCart: () => { },
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent, MatBadge],
      providers: [{ provide: CartService, useValue: CartServiceMock }]
    });

    fixture = TestBed.createComponent(HeaderComponent);
    service = TestBed.inject(CartService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('totalProductInCart is defined', () => {
    expect(component.totalProductsInCart).toBeDefined();
  });

  it('totalProductsInCart matches with the badge', () => {
    component.checkTotalProductsInCart();
    expect(component.totalProductsInCart).toBe(3);
  });

  it('suscribe error should return an error', () => {
    const consoleErrorSpy = spyOn(console, 'error');
    service.cart$ = throwError(() => new Error('Error'));
    expect(consoleErrorSpy).toThrowError('Error');
  });
});
