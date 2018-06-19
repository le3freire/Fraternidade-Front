import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatSidenavModule, MatListModule, MatToolbarModule, MatIconModule} from '@angular/material';


import { AppComponent } from './app.component';
import { AtendimentosComponent } from './atendimentos/atendimentos.component';
import { AtividadesComponent } from './atividades/atividades.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AtendimentosComponent,
    AtividadesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
