import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AtendimentosComponent } from './atendimentos/atendimentos.component';
import { AtividadesComponent } from './atividades/atividades.component';

@NgModule({
  declarations: [
    AppComponent,
    AtendimentosComponent,
    AtividadesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
