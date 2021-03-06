import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/model';
import { HttpService } from '../service/http.service';
import { Md5 } from 'ts-md5';
import { Router } from '@angular/router';

const WS_REGISTRO = 'http://localhost:3000/usuario/salvar';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent implements OnInit {

    usuario : Usuario = new Usuario();    
    public conteudoImg;

    constructor(private http : HttpService, private router : Router) { }

    ngOnInit() {
    }

    selecionar($event) {
        let f = $event.target.files[0];
        let fr = new FileReader();

        fr.onloadend = (e) => {
            this.conteudoImg = fr.result;
        }

        fr.readAsDataURL(f);
    }

    salvar() {
        let fd = new FormData();
        fd.append('foto', this.conteudoImg);
        this.usuario.senha = Md5.hashStr(this.usuario.senha) as string;
        fd.append('usuario', JSON.stringify(this.usuario));

        this.http.post(WS_REGISTRO, fd, () => {
            this.router.navigateByUrl('/login');
        });
    }

}