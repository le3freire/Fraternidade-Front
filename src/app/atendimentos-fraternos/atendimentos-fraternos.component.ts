import { Component, OnInit } from '@angular/core';
import { AtendimentoFraterno } from "../models/atendimento-fraterno";
import { AtendimentoService } from "./shared/atendimento.service";


@Component({
  selector: 'app-atendimentos-fraternos',
  templateUrl: './atendimentos-fraternos.component.html',
  styleUrls: ['./atendimentos-fraternos.component.css']
})
export class AtendimentosFraternosComponent implements OnInit {

  atendimentos: AtendimentoFraterno[];

  constructor(private atendimentoService: AtendimentoService) { }

  ngOnInit() {
    this.getAtendimentos(new Date());
  }

  getAtendimentos(datAtendimento:Date): void{
    this.atendimentoService.getAtendimentos(datAtendimento)
        .subscribe(at => this.atendimentos = at);
  }

}
