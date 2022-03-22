import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleAutocompleteServiceComponent } from './google-autocomplete-service.component';

describe('GoogleAutocompleteServiceComponent', () => {
  let component: GoogleAutocompleteServiceComponent;
  let fixture: ComponentFixture<GoogleAutocompleteServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleAutocompleteServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleAutocompleteServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
