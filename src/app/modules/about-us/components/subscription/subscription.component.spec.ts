import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionComponent } from './subscription.component';
import { MailInputComponent } from 'src/app/shared/mail-input/mail-input.component';
import { By } from '@angular/platform-browser';

fdescribe('SubscriptionComponent', () => {
  let component: SubscriptionComponent;
  let fixture: ComponentFixture<SubscriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubscriptionComponent],
      imports: [MailInputComponent]
    });
    fixture = TestBed.createComponent(SubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('text variables should return the designed text', () => {
    expect(component.title).toEqual('Subscribe for more info');
    expect(component.textButton).toEqual('Subscribe');
    expect(component.description).toEqual('Subscribe to receive updates and join our list');
  });

  it('should set textButton correctly in MailInputComponent', () => {
    const mailInputComponent = fixture.debugElement.query(By.directive(MailInputComponent)).componentInstance;
    expect(mailInputComponent.textButton).toBe(component.textButton);
  });
});
