import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionComponent } from './components/subscription/subscription.component';
import { DescriptionComponent } from './components/description/description.component';
import { MoreInfoComponent } from './components/more-info/more-info.component';
import { AboutUsComponent } from './about-us.component';
import { AboutUsRoutingModule } from './about-us-routing.module';
import { MailInputComponent } from 'src/app/shared/mail-input/mail-input.component';




@NgModule({
  declarations: [
    SubscriptionComponent,
    DescriptionComponent,
    MoreInfoComponent,
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    AboutUsRoutingModule,
    MailInputComponent
  ]
})
export class AboutUsModule { }
