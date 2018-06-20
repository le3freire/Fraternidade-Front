import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Atendimento } from '../models/atendimento';
import { AtendimentoService } from './shared/atendimento.service';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import * as _moment from 'moment';

@Component({
  selector: 'app-atendimentos',
  templateUrl: './atendimentos.component.html',
  styleUrls: ['./atendimentos.component.css']
})

export class AtendimentosComponent implements OnInit {

  atendimentos: Atendimento[];
  datAtual: _moment.Moment;

  // @Input() matDatepicker: MatDatepicker<D>;

  constructor(private atendimentoService: AtendimentoService) { }

  // datAtual = new FormControl(new Date());

  ngOnInit() {
    // this.getAtendimentos(this.datAtendimento.value);
  }

  obterAtendimentos(event: MatDatepickerInputEvent<Date>): void {

    if (event.value != null) {
      this.atendimentoService.obterAtendimentos(event.value)
      .subscribe(at => this.atendimentos = at);
    }
  }

  avancarDia() {
    this.datAtual.add('days', 1);
    // this.datAtual.toDate().setDate(this.datAtual.toDate().getDate() + 1);
  }


}
