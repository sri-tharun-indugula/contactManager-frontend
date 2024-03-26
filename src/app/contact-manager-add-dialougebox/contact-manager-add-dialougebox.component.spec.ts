import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactManagerAddDialougeboxComponent } from './contact-manager-add-dialougebox.component';

describe('ContactManagerAddDialougeboxComponent', () => {
  let component: ContactManagerAddDialougeboxComponent;
  let fixture: ComponentFixture<ContactManagerAddDialougeboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactManagerAddDialougeboxComponent]
    });
    fixture = TestBed.createComponent(ContactManagerAddDialougeboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
