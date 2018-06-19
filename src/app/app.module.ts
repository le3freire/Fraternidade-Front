import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatSidenavModule, MatListModule, MatToolbarModule, MatIconModule,
   MatInputModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AtendimentosComponent } from './atendimentos/atendimentos.component';
import { AtividadesComponent } from './atividades/atividades.component';
import { AppRoutingModule } from './/app-routing.module';
import { DatePickerModule } from './shared/date-picker.module';

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
    MatInputModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DatePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
