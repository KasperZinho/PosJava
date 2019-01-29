import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcompanhamentoComponent } from './pages/acompanhamento/acompanhamento.component';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './app.routes';
import { WebSocketClient } from './service/socket.client';

@NgModule({
  declarations: [
    AppComponent,
    AcompanhamentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [
    WebSocketClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
