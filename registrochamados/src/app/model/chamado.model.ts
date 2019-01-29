import { Departamento } from './departamento.model';

export class Chamado{
    _id: String
    descricao : string
    solicitante : string
    departamento : Departamento
    data : Date
    status : number
}