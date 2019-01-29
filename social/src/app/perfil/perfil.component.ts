import { Component, OnInit, Injectable } from '@angular/core';
import { Usuario } from '../model/model';
import { AuthService } from '../service/auth.service';
import { HttpService } from '../service/http.service';
import { Md5 } from 'ts-md5';

const WS_PERF = 'http://localhost:3000/usuario/verperf';
const WS_ALTE = 'http://localhost:3000/usuario/alterar';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})

@Injectable()
export class PerfilComponent implements OnInit {

    usuario : Usuario;
    public conteudoImg;
    senha : String;
    senhaOld : string;
    imgOld : string;
    
    constructor(private auth : AuthService, private http : HttpService) { }

    ngOnInit() {
        this.funcIniciar();
    }

    funcIniciar(){
        this.usuario = this.auth.usuario;
        this.senhaOld = this.usuario.senha;
        this.imgOld = this.usuario.foto;
        this.usuario.senha = '';
        this.perfil();
        this.auth.login(this.usuario as Usuario);
        this.conteudoImg = 'http://localhost:3000/' + this.usuario.foto;
    }
  
    perfil() {
        this.http.get(WS_PERF + '?usuario=' + this.usuario._id, (ret) => { });
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
        if (this.usuario.senha != '') {
            this.usuario.senha = Md5.hashStr(this.usuario.senha) as string;
        } else {
            this.usuario.senha = this.senhaOld;
        }

        if (this.usuario.foto != undefined) {
            let fd = new FormData();
            fd.append('foto', this.conteudoImg);
            fd.append('usuario', JSON.stringify(this.usuario));

            this.http.post(WS_ALTE, fd, () => {
                this.funcIniciar() 
                this.usuario.senha = '';
            });
        } else {
            this.usuario.foto = this.imgOld;
            this.http.post(WS_ALTE, this.usuario, () => {
                this.funcIniciar() 
                this.usuario.senha = '';
            });
        }
    }

}
