import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { RoutingModule } from './app.router'
import { ListaChamadosComponent } from './pages/lista-chamados/lista-chamados.component'
import { NovoChamadoComponent } from './pages/novo-chamado/novo-chamado.component'

import { AccordionModule } from 'primeng/accordion'
import { MenuItem } from 'primeng/api'
import {AutoCompleteModule} from 'primeng/autocomplete'


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ChamadoService } from './service/chamado.service';
import { DepartamentoService } from './service/departamento.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListaChamadosComponent,
    NovoChamadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RoutingModule,
    AccordionModule,
    BrowserAnimationsModule,
    AutoCompleteModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ChamadoService,
    DepartamentoService,

  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
