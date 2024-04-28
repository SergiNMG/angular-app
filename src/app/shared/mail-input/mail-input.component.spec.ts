import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreInfoComponent } from 'src/app/modules/about-us/components/more-info/more-info.component';
import { Component } from '@angular/core';
import { MailInputComponent } from './mail-input.component';

fdescribe('MailInputComponent', () => {
  let component: MailInputComponent;
  let fixture: ComponentFixture<MailInputComponent>;
  let moreInfoComponet: MoreInfoComponent;
  let moreInfoFixture: ComponentFixture<MoreInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoreInfoComponent],
      imports: [MailInputComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(MailInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    moreInfoFixture = TestBed.createComponent(MoreInfoComponent);
    moreInfoComponet = moreInfoFixture.componentInstance;
    moreInfoFixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show title textButton as a input variable', () => {
    expect(moreInfoFixture.nativeElement.querySelector('div').innerText).toEqual('Send');
  });

  @Component({
    selector: `app-more-info`,
    template: `<app-mail-input [textButton]="textButton"></app-mail-input>`
  })
  class MoreInfoComponent {
    textButton: string = 'Send';
  }
});
