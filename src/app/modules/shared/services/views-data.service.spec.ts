import { TestBed } from '@angular/core/testing';

import { ViewsDataService } from './views-data.service';

describe('ViewsDataService', () => {
  let service: ViewsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
