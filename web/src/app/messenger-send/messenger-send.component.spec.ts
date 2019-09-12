import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessengerSendComponent } from './messenger-send.component';

describe('MessengerSendComponent', () => {
  let component: MessengerSendComponent;
  let fixture: ComponentFixture<MessengerSendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessengerSendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessengerSendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
