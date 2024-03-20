import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactManagerTableComponent } from './contact-manager-table.component';

describe('ContactManagerTableComponent', () => {
  let component: ContactManagerTableComponent;
  let fixture: ComponentFixture<ContactManagerTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactManagerTableComponent]
    });
    fixture = TestBed.createComponent(ContactManagerTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
