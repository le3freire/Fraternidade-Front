import { TestBed, inject } from '@angular/core/testing';

import { AtendimentoService } from './atendimento.service';

describe('AtendimentoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AtendimentoService]
    });
  });

  it('should be created', inject([AtendimentoService], (service: AtendimentoService) => {
    expect(service).toBeTruthy();
  }));
});
