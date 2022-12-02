import { TestBed } from '@angular/core/testing';
import { TreinoApiService } from './treino-api.service';

describe('TreinoApiService', () => {
  let service: TreinoApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TreinoApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
