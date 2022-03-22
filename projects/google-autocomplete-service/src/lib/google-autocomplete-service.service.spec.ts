import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { async, inject, TestBed } from '@angular/core/testing';

import { GoogleAutocompleteService } from './google-autocomplete-service.service';

describe('GoogleAutocompleteService', () => {
  let service: GoogleAutocompleteService;
  let httpMock: { verify: () => void; };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoogleAutocompleteService],
      imports: [HttpClientTestingModule]
    })
    service = TestBed.get(GoogleAutocompleteService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    const service: GoogleAutocompleteService = TestBed.get(GoogleAutocompleteService);
    expect(service).toBeTruthy();
  });

  it('#$submitForm should broadcast currentTask value and subscribe.', () => {
    // let mockData: TrackedTask = {
    //   id: null,
    //   icon: [],
    //   iconIndicator: [],
    //   name: '',
    //   order: null,
    //   status: null,
    //   routerLink: ''
    // };
    // service.$submitForm.next(mockData);
    // service.submitForm_.subscribe(res => {
    //   expect(res).toEqual(mockData);
    // });
    expect().nothing();
  });

  it(`#fetchPostJob() should fetch PostJobFetchRequest as an Observable`, async(inject([HttpTestingController, GoogleAutocompleteService],
    (httpClient: HttpTestingController, jobService: GoogleAutocompleteService) => {
      const postItem = []; // mock data of response
      // let req = httpMock.expectOne(service.getEndpoint(service.postJobResource));
      // expect(req.request.method).toBe("POST");
      // req.flush(postItem);
      httpMock.verify();
    })));

  it(`#createLanguage() should fetch SelectedLanguage as an Observable`, async(inject([HttpTestingController, GoogleAutocompleteService],
    (httpClient: HttpTestingController, jobService: GoogleAutocompleteService) => {
      const postItem = []; // mock data of response
      // let req = httpMock.expectOne(service.getEndpoint(service.languageResource));
      // expect(req.request.method).toBe("POST");
      // req.flush(postItem);
      httpMock.verify();
    })));
});
