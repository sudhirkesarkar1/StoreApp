/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AlertyfyService } from './AlertyfyService.service';

describe('Service: AlertyfyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlertyfyService]
    });
  });

  it('should ...', inject([AlertyfyService], (service: AlertyfyService) => {
    expect(service).toBeTruthy();
  }));
});
