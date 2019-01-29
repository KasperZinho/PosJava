import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

const WS_LISTAR = "http://localhost:3000/departamento/listar"


@Injectable()
export class DepartamentoService {

    constructor(private http : HttpClient) {

    }

    listar(cb : (ret : any) => void) {
        this.http.get(WS_LISTAR).subscribe(cb, this.tratarErro)
    }


    private tratarErro(e : Error) {
        alert('Erro ao executar ws departamento ' + e.message)
    }

}