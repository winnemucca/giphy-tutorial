import { TestBed, inject } from '@angular/core/testing';

import { GiphyService } from './gipy-service.service';

import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { HttpEvent, HttpEventType } from '@angular/common/http/http';

describe('GiphyService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: GiphyService = TestBed.get(GiphyService);
    expect(service).toBeTruthy();
  });

  // it(
  //   'should get users',
  //   inject(
  //     [HttpTestingController, GiphyService],
  //     (httpMock: HttpTestingController, giphyService: GiphyService) => {
  //       const searchTerm = {
  //         term: 'test'
  //       };

  //       // giphyService.getResults(searchTerm).subscribe((event: HttpEvent<any>) => {
  //       //   switch (event.type) {
  //       //     case HttpEventType.Response:
  //       //       expect(event.body).toEqual(searchTerm);
  //       //   }
  //       // });
  //     }
  //   )
  // );
});
