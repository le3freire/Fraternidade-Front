import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Atendimento } from '../../models/atendimento';
import { ATENDIMENTOS } from './mock-atendimentos';

@Injectable({
  providedIn: 'root'
})

export class AtendimentoService {

  constructor() { }

  // Retornar todos os atendimentos de uma determinada data
  obterAtendimentos(datAtendimento: Date): Observable<Atendimento[]> {
    return of(ATENDIMENTOS.filter(function(at) {
      return at.dataAtendimento.toISOString() === datAtendimento.toISOString();
    })); // utilisando o mock com async

  }
}
