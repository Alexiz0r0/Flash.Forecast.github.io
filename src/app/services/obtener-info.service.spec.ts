import { TestBed } from '@angular/core/testing';

import { ObtenerInfoService } from './obtener-info.service';

describe('ObtenerInfoService', () => {
  let service: ObtenerInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObtenerInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
