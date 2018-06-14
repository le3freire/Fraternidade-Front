import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AtendimentosFraternosComponent } from './atendimentos-fraternos/atendimentos-fraternos.component';

@NgModule({
  declarations: [
    AppComponent,
    AtendimentosFraternosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
