import { Component, OnInit } from '@angular/core';
import { Atendimento } from "../models/atendimento";
import { AtendimentoService } from "./shared/atendimento.service";


@Component({
  selector: 'app-atendimentos',
  templateUrl: './atendimentos.component.html',
  styleUrls: ['./atendimentos.component.css']
})
export class AtendimentosComponent implements OnInit {

  atendimentos: Atendimento[];

  constructor(private atendimentoService: AtendimentoService) { }

  ngOnInit() {
    this.getAtendimentos(new Date());
  }

  getAtendimentos(datAtendimento:Date): void{
    this.atendimentoService.getAtendimentos(datAtendimento)
        .subscribe(at => this.atendimentos = at);
  }

}
