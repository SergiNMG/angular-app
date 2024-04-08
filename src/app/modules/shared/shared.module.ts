import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarsRatingComponent } from './components/stars-rating/stars-rating.component';
import { MailInputComponent } from './components/mail-input/mail-input.component';




@NgModule({
  declarations: [
    StarsRatingComponent,
    MailInputComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StarsRatingComponent,
    MailInputComponent
  ]
})
export class SharedModule { }
