import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailInputComponent } from './mail-input.component';

describe('MailInputComponent', () => {
  let component: MailInputComponent;
  let fixture: ComponentFixture<MailInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MailInputComponent]
    });
    fixture = TestBed.createComponent(MailInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
