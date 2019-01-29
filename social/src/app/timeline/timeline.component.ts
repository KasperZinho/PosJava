import { Component, OnInit, Injectable } from '@angular/core';
import { Pergunta, Usuario } from '../model/model';
import { HttpService } from '../service/http.service';
import { ActivatedRoute } from '@angular/router';

const WS_LISTAR = "http://localhost:3000/pergunta/listar";
const WS_PERF = 'http://localhost:3000/usuario/esp';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})

@Injectable()
export class TimelineComponent implements OnInit {

    perguntas : Pergunta[];
    usuario : Usuario = new Usuario();
    id : number;
    public conteudoImg;

    constructor(private http : HttpService, private route: ActivatedRoute) {}

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = params['id'];
         });

         this.perfil();
         this.perguntaslst();
    }

    perfil() {
        this.http.get(WS_PERF + '?usuario=' + this.id, (ret) => { 
            this.usuario = ret[0];
            this.conteudoImg = 'http://localhost:3000/' + this.usuario.foto;
        });
    }

    perguntaslst() {
        this.http.get(WS_LISTAR + '?usuario=' + this.id, (ret) => {
            this.perguntas = ret
        });
    }

}