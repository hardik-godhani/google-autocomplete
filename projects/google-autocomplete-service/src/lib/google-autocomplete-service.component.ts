import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GoogleAutocompleteService } from './google-autocomplete-service.service';

@Component({
  selector: 'google-autocomplete',
  template: ``,
  styles: []
})
export class GoogleAutocompleteServiceComponent implements OnInit {

  @Input() form: FormGroup = new FormGroup({});
  @Input() selector: string = '';

  constructor(private googleService: GoogleAutocompleteService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.googleService.loadAutoComplete(this.form, this.selector);
    }, 100);
  }

}
