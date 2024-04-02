import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-stars-rating',
  templateUrl: './stars-rating.component.html',
  styleUrls: ['./stars-rating.component.scss']
})
export class StarsRatingComponent implements OnChanges{
  @Input() rating!: number;

  fullStars!: number;
  allStars!:string[];

  ngOnChanges(){
    this.generateStars();
    this.fullStars = Math.trunc(this.rating);
    this.fillStars();
  }

  generateStars(){
    this.allStars = new Array(5).fill('bi-star');
  }

  fillStars(){
    this.allStars.fill('bi-star-fill', 0, this.fullStars);
    if (this.hasHalfStar()) { this.refillHalfStars() }; 
  }

  hasHalfStar(): boolean{
    return this.rating % 1 > 0;
  }

  refillHalfStars(){
    this.allStars[this.fullStars] = 'bi-star-half';
  }
}
