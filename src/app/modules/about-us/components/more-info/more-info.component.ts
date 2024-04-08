import { Component } from '@angular/core';

@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.scss']
})
export class MoreInfoComponent {
  title: string = 'Needs more info';
  textButton: string = 'Send';
  description: string = 'send me an email to get more info about products'
}
