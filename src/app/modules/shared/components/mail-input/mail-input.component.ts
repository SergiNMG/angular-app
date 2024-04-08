import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mail-input',
  templateUrl: './mail-input.component.html',
  styleUrls: ['./mail-input.component.scss']
})
export class MailInputComponent {
  @Input() title!: string;
  @Input() description !: string;
  @Input() textButton !: string;
}
