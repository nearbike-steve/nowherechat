import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessengerUpdateComponent } from './messenger-update.component';

describe('MessengerUpdateComponent', () => {
  let component: MessengerUpdateComponent;
  let fixture: ComponentFixture<MessengerUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessengerUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessengerUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
