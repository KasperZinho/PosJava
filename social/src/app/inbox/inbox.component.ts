import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { HttpService } from '../service/http.service';
import { Usuario, Pergunta } from '../model/model';

const WS_LISTA = 'http://localhost:3000/pergunta/inbox';
const WS_IGNORA = 'http://localhost:3000/pergunta/ignorar';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})

export class InboxComponent implements OnInit {

    usuario : Usuario;
    perguntas : Pergunta[];
    pergunta : Pergunta = new Pergunta();

    constructor(private auth : AuthService, private http : HttpService) { }

    ngOnInit() {
        this.usuario = this.auth.usuario;
        this.listar();
    }

    listar() {
        this.http.get(WS_LISTA + '?usuario=' + this.usuario._id, (ret) => {
            this.perguntas = ret;
        });
    }

    ignorar(id) {
        this.http.get(WS_IGNORA + '?ignorado=' + id, () => {
            this.listar();
        });
    }

}