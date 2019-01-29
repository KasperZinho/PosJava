import { Component, OnInit, Injectable } from '@angular/core';
import { Pergunta, Usuario } from '../model/model';
import { AuthService } from '../service/auth.service';
import { HttpService } from '../service/http.service';

const WS_LISTAR = "http://localhost:3000/pergunta/listar";
const WS_USERS = "http://localhost:3000/usuario/listar";
const WS_PERG = "http://localhost:3000/pergunta/perguntar";

@Component({
  selector: 'app-pergunta',
  templateUrl: './pergunta.component.html',
  styleUrls: ['./pergunta.component.css']
})

@Injectable()
export class PerguntaComponent implements OnInit {

    perguntas : Pergunta[];
    pergunta = new Pergunta();
    usuarios : Usuario[];
    usuario : Usuario;

    constructor(private auth : AuthService, private http : HttpService) { }

    ngOnInit() {
        this.usuario = this.auth.usuario;
        this.listar();
    }

    listar() {
        this.http.get(WS_USERS, (ret) => {
            this.usuarios = ret
        });

        this.http.get(WS_LISTAR + '?usuario=' + this.usuario._id, (ret) => {
            this.perguntas = ret
        });

        this.pergunta.descricao = ''

    }

    perguntar() {
        this.pergunta.remetente = this.usuario;
        this.pergunta.dataPergunta = new Date();
        this.pergunta.dataResposta = null;
        this.pergunta.resposta = null;

        this.http.post(WS_PERG, this.pergunta, () => {
            this.listar();
        });
    }

}
