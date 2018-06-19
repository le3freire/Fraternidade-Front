import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtendimentosComponent } from '../app/atendimentos/atendimentos.component';

// Criando um array de rotas.
// As rotas devem ser adicionadas aqui.
const routes: Routes = [
  {
    path: 'atendimentos',
    component: AtendimentosComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
