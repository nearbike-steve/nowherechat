import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessengerUserRoomComponent } from './messenger-user-room.component';

describe('MessengerUserRoomComponent', () => {
  let component: MessengerUserRoomComponent;
  let fixture: ComponentFixture<MessengerUserRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessengerUserRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessengerUserRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
