import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
declare const google: any;

@Injectable({
  providedIn: 'root'
})
export class GoogleAutocompleteService {

  constructor() { }

  /**
   * Load auto complete for Address from Google
   */
  loadAutoComplete(form: FormGroup, selector: string) {
    const input = document.getElementById(selector) as HTMLInputElement;
    if (input && form) {
      const autocomplete = new google.maps.places.Autocomplete(input);
      autocomplete.setFields(['address_components', 'geometry', 'icon', 'name']);
      autocomplete.addListener('place_changed', () => {
        form.setValue({
          line2: '',
          city: '',
          state: '',
          zipCode: '',
          country: '',
        })
        const place = autocomplete.getPlace();
        if (!place.geometry) {
          return;
        }
        else {
          let addressStreetAddress: string = '';
          place.address_components.forEach((add: { types: any[]; short_name: string; long_name: string; }) => {
            add.types.forEach((addType) => {
              if (addType == 'street_number')
                addressStreetAddress += add.short_name + ' ';
              if (addType == 'route') addressStreetAddress += add.long_name;
              if (addType == 'street_number' || addType == 'route')
                form.setValue({ line1: addressStreetAddress })
              if (addType == 'sublocality_level_2')
                form.setValue({ line2: add.long_name })
              if (addType == 'administrative_area_level_2' || addType == 'locality')
                form.setValue({ city: add.long_name })
              if (addType == 'administrative_area_level_1')
                form.setValue({ state: add.long_name })
              if (addType == 'postal_code')
                form.setValue({ zipCode: add.long_name })
              if (addType == 'country')
                form.setValue({ country: add.short_name })
            });
          });
          return;
        }
      });
    }
  }
}
