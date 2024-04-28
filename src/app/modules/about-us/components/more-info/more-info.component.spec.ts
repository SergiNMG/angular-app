import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreInfoComponent } from './more-info.component';
import { MailInputComponent } from 'src/app/shared/mail-input/mail-input.component';
import { By } from '@angular/platform-browser';

fdescribe('MoreInfoComponent', () => {
  let component: MoreInfoComponent;
  let fixture: ComponentFixture<MoreInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoreInfoComponent],
      imports: [MailInputComponent]
    });
    fixture = TestBed.createComponent(MoreInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('text variables should return the designed text', () => {
    expect(component.title).toEqual('Needs more info');
    expect(component.description).toEqual('send me an email to get more info about products')
  });

  it('should set textButton correctly in MailInputComponent', () => {
    const mailInputComponent = fixture.debugElement.query(By.directive(MailInputComponent)).componentInstance;
    expect(mailInputComponent.textButton).toBe(component.textButton);
  });
});
