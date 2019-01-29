import { Component, OnInit } from '@angular/core';
import { Departamento } from 'src/app/model/departamento.model';
import { Chamado } from 'src/app/model/chamado.model';
import { Router } from '@angular/router';
import { ChamadoService } from 'src/app/service/chamado.service'
import { DepartamentoService } from 'src/app/service/departamento.service';

@Component({
  selector: 'app-novo-chamado',
  templateUrl: './novo-chamado.component.html',
  styleUrls: ['./novo-chamado.component.css']
})
export class NovoChamadoComponent implements OnInit {

  chamado = new Chamado()

  departamentos : Departamento[]

  constructor(private router : Router,
              private cs : ChamadoService,
              private ds : DepartamentoService) { }

  ngOnInit() {
      this.ds.listar( (ret) => {
        this.departamentos = ret
    })
  }

  salvar() {
    this.cs.salvar(this.chamado,
        () => {
            this.router.navigateByUrl('/')
        }
    )
  }
}
