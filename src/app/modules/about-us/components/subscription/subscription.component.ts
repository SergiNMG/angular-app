import { Component } from '@angular/core';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent {
  title: string = 'Subscribe for more info';
  textButton: string = 'Subscribe';
  description: string = 'Subscribe to receive updates and join our list'
}
