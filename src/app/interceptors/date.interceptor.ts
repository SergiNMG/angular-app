import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';
import { Product } from '../models/product';
import { Review } from '../models/review';

@Injectable()
export class DateInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
      .pipe(
        map(event => {
          if (event instanceof HttpResponse) {
            const products: Product[] = event.body;

            products.forEach(product => {
              if (product.reviews) {
                product.reviews.forEach(review => {
                  const date = new Date(review.date);
                  const simpleDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`
                  review.date = simpleDate;
                })
              }
            });
          }
          return event;
        })
      );
  }
}
