import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Chamado } from "../model/chamado.model";

const WS_LISTAR = "http://localhost:3000/chamado/listar"

@Injectable()
export class ChamadoService {

    constructor(private http : HttpClient) {

    }

    listar(cb : (ret : any) => void){
        this.http.get(WS_LISTAR).subscribe(cb, this.tratarErro)
    }


    private tratarErro(e : Error) {
        alert('Erro ao executar ws chamados ' + e.message)
    }

}