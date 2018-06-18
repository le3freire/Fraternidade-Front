import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { Atendimento } from "../../models/atendimento";
import { ATENDIMENTOS } from "./mock-atendimentos";

@Injectable({
  providedIn: 'root'
})

export class AtendimentoService {

  constructor() { }

  //Retornar todos os atendimentos de uma determinada data
  getAtendimentos(datAtendimento:Date): Observable<Atendimento[]>{
    return of(ATENDIMENTOS); //utilisando o mock com async
  }
}
