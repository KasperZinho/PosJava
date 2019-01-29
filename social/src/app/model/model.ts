export class Usuario {
	public _id : string;
	public login : string;
	public senha : string;
	public nome : string;
    public bio : string;
    public foto : string;
    public email : string;
}

export class Pergunta {
    descricao : String;
    dataPergunta : Date;
    remetente : Usuario;
    destinatário : Usuario;
    resposta : String;
    dataResposta : Date; 
}