import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMessageSenderComponent } from './create-message-sender.component';

describe('CreateMessageSenderComponent', () => {
  let component: CreateMessageSenderComponent;
  let fixture: ComponentFixture<CreateMessageSenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMessageSenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMessageSenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
