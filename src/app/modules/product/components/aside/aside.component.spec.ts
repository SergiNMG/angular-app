import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideComponent } from './aside.component';
import { Product } from 'src/app/interfaces/models/Product';
import { FilterState } from 'src/app/interfaces/models/filterState';

fdescribe('AsideComponent', () => {
  let component: AsideComponent;
  let fixture: ComponentFixture<AsideComponent>;
  let productMock: Product = {
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
  }
  let productsMock: Product[] = [
    {
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
    {
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
    }
  ]
  let mockFilterState: FilterState = {
    filterHigh: false,
    filterLow: true,
    showHighProducts: false,
    resetProductsFilter: false
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsideComponent]
    });
    fixture = TestBed.createComponent(AsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.products = productsMock;
    component.selectedProduct = productMock;
    component.filterState = mockFilterState;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should receive a product and a productList', () => {
    expect(component.products).toEqual(productsMock);
    expect(component.selectedProduct).toEqual(productMock);
  });

  it('should receive a filterState to highlight the button', () => {
    expect(component.filterState).toEqual(mockFilterState);
    expect(component.filterState?.filterHigh).toBe(false);
    expect(component.filterState?.filterLow).toBe(true);
  });

  it('should emit filterEvents when filters are clicked', () => {
    let orderHighestPriceSpy = spyOn(component.orderHighestPriceEvent, 'emit');
    let orderLowestPriceSpy = spyOn(component.orderLowestPriceEvent, 'emit');
    let showHigherPriceSpy = spyOn(component.showHigherPriceEvent, 'emit');

    component.orderHighestPrice();
    expect(orderHighestPriceSpy).toHaveBeenCalled();
    component.orderLowestPrice();
    expect(orderLowestPriceSpy).toHaveBeenCalled();
    component.showHigherPrice();
    expect(showHigherPriceSpy).toHaveBeenCalled();
  });

  it('should emit resetFilters when resetFilter is clicked', () => {
    let resetProductsFilterSpy = spyOn(component.resetProductsFilterEvent, 'emit');

    component.orderHighestPrice();
    component.resetProductsFilters();
    expect(resetProductsFilterSpy).toHaveBeenCalled();
  })

  it('should emit the product selected when selectProduct is clicked', () => {
    let selectProductSpy = spyOn(component.selectProductEvent, 'emit');
    console.log(` ${component.selectedProduct}`);

    component.selectProduct(productsMock[1]);
    expect(selectProductSpy).toHaveBeenCalledWith(productsMock[1]);
  });

});
