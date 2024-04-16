import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DateInterceptor } from './interceptors/date.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: DateInterceptor,
    multi: true
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
