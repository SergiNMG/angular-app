import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarsRatingComponent } from './stars-rating.component';

fdescribe('StarsRatingComponent', () => {
  let component: StarsRatingComponent;
  let fixture: ComponentFixture<StarsRatingComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [StarsRatingComponent]
    });
    fixture = TestBed.createComponent(StarsRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#ngOnChange() should call generateStars, set fullStars and call fillStars', () => {
    spyOn(component, 'generateStars');
    spyOn(component, 'fillStars');

    component.rating = 3.5;
    component.ngOnChanges();

    expect(component.generateStars()).toHaveBeenCalled;
    expect(component.fullStars).toBe(3);
    expect(component.fillStars()).toHaveBeenCalled;
  });

  it('#generateStars() should generate 5 stars', () => {
    component.generateStars();
    expect(component.allStars.length).toBe(5);
    expect(component.allStars).toEqual(['bi-star', 'bi-star', 'bi-star', 'bi-star', 'bi-star']);
  });

  it('#fillStars() should fill stars depend on product rating', () => {
    component.rating = 2;
    component.ngOnChanges();
    expect(component.allStars).toEqual(['bi-star-fill', 'bi-star-fill', 'bi-star', 'bi-star', 'bi-star']);
    expect(component.hasHalfStar()).toEqual(false);

    component.rating = 3.5;
    component.ngOnChanges();
    expect(component.allStars).toEqual(['bi-star-fill', 'bi-star-fill', 'bi-star-fill', 'bi-star-half', 'bi-star']);
    expect(component.hasHalfStar()).toEqual(true);

    component.rating = 4.8;
    component.ngOnChanges();
    expect(component.allStars).toEqual(['bi-star-fill', 'bi-star-fill', 'bi-star-fill', 'bi-star-fill', 'bi-star-half']);
    expect(component.hasHalfStar()).toEqual(true);
  });

  it('#setStarColor() should paint stars according to their rating', () => {
    component.rating = 2;
    expect(component.setStarColor()).toEqual('text-danger');

    component.rating = 4;
    expect(component.setStarColor()).toEqual('text-warning');

    component.rating = 5;
    expect(component.setStarColor()).toEqual('text-success');
  });
});
