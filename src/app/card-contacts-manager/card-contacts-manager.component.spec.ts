import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardContactsManagerComponent } from './card-contacts-manager.component';

describe('CardContactsManagerComponent', () => {
  let component: CardContactsManagerComponent;
  let fixture: ComponentFixture<CardContactsManagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardContactsManagerComponent]
    });
    fixture = TestBed.createComponent(CardContactsManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
