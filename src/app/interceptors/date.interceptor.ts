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
            const product: Product[] = event.body;

            product.forEach(product => {
              if (product.reviews) {
                product.reviews.forEach(review => {
                  console.log(review.date);
                  review.date = new Date(review.date);
                  console.log(review.date);
                })
              }
            });
          }
          return event;
        })
      );
  }
}
