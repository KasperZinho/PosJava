import { Component, OnInit } from '@angular/core';
import { Chamado } from 'src/app/model/chamado.model';
import { WebSocketClient } from 'src/app/service/socket.client';

@Component({
  selector: 'app-acompanhamento',
  templateUrl: './acompanhamento.component.html',
  styleUrls: ['./acompanhamento.component.css']
})
export class AcompanhamentoComponent implements OnInit {

  chamados : Chamado[]

  constructor(private ws : WebSocketClient) { }

  ngOnInit() {    
    this.ws.initSocket()
    this.definirEventos()
  }

  definirEventos() {
    this.ws.onEvent('listarSocket').subscribe( (dados) => {
        let c = JSON.parse(dados)
        
        this.chamados = c

    })
  }

}
