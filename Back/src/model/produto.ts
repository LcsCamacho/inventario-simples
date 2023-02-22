export class Produto {
    private id: number;
    private nome: string;
    private descricao: string;
    private valor: number;

    constructor(
        id: number,
        nome: string,
        descricao: string,
        valor: number
    ) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.valor = valor;
    }
}