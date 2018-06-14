import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { AtendimentoFraterno } from "../../models/atendimento-fraterno";
import { ATENDIMENTOS } from "./mock-atendimentos";

@Injectable({
  providedIn: 'root'
})

export class AtendimentoService {

  constructor() { }

  //Retornar todos os atendimentos de uma determinada data
  getAtendimentos(datAtendimento:Date): Observable<AtendimentoFraterno[]>{       
    return of(ATENDIMENTOS); //utilisando o mock com async
  }
}
