import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Chamado } from "../model/chamado.model";

const WS_SALVAR = "http://localhost:3000/chamado/salvar"
const WS_LISTAR = "http://localhost:3000/chamado/listar"
const WS_ATUALIZAR = "http://localhost:3000/chamado/atualizar"
const WS_EXCLUIR = "http://localhost:3000/chamado/excluir/"


@Injectable()
export class ChamadoService {

    constructor(private http : HttpClient) {

    }

    salvar(chamado : Chamado, cb : () => void) {
        this.http.post(WS_SALVAR, chamado).subscribe(cb, this.tratarErro)
    }

    listar(cb : (ret : any) => void){
        this.http.get(WS_LISTAR).subscribe(cb, this.tratarErro)
    }

    atualizar(chamado : Chamado, cb : () => void){
        this.http.post(WS_ATUALIZAR, chamado).subscribe(cb, this.tratarErro)

    }

    excluir(chamado : Chamado, cb:() => void){
        this.http.get(WS_EXCLUIR + chamado._id).subscribe(cb, this.tratarErro)
    }

    private tratarErro(e : Error) {
        alert('Erro ao executar ws chamados ' + e.message)
    }

}