import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { HttpService } from '../service/http.service';
import { Pergunta } from '../model/model';

const WS_RESP = "http://localhost:3000/pergunta/resposta";
const WS_RESPT = "http://localhost:3000/pergunta/responder";

@Component({
  selector: 'app-resposta',
  templateUrl: './resposta.component.html',
  styleUrls: ['./resposta.component.css']
})
export class RespostaComponent implements OnInit {
    id: number;
    p : Pergunta = new Pergunta();
    
    constructor(private route: ActivatedRoute, private router : Router, private auth : AuthService, private http : HttpService) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
           this.pergunta(params['id'])
        });
    }

    pergunta(id) {
        this.http.get(WS_RESP + '?perg=' + id, (ret) => {
            this.p = ret;
        });
    }

    responder() {
        this.p.dataResposta = new Date();
        this.http.post(WS_RESPT, this.p, () => {
            this.router.navigateByUrl('/home/inbox');
        });
    }
}