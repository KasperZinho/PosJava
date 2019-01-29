import { Component, OnInit } from '@angular/core';
import { Chamado } from 'src/app/model/chamado.model';
import { ChamadoService } from 'src/app/service/chamado.service';

@Component({
  selector: 'app-lista-chamados',
  templateUrl: './lista-chamados.component.html',
  styleUrls: ['./lista-chamados.component.css']
})
export class ListaChamadosComponent implements OnInit {


  chamados : Chamado[]

  constructor(private cs : ChamadoService) { }

  ngOnInit() {
    this.listar()
  }

  listar(){
    this.cs.listar((ret)=>{
        this.chamados = ret
    })
  }

  status(c : Chamado){
    c.status++
    this.cs.atualizar(c, ()=>{
      this.listar()
    })
  }

  excluir(c : Chamado){
    this.cs.excluir(c, ()=>{
      this.listar()
    })
  }

}
