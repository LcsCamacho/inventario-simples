interface IProduto {
    id?: number;
    nome?: string;
    descricao?: string;
    valor?: number;
}

export class Produto {
    private id: number | undefined;
    private nome: string | undefined;
    private descricao: string | undefined;
    private valor: number | undefined;



    constructor(data: IProduto) {
        this.id = data.id;
        this.nome = data.nome;
        this.descricao = data.descricao;
        this.valor = data.valor;
    }

    public create() {
        return `INSERT INTO produtos (nome, descricao, valor) VALUE ('${this.nome}', '${this.descricao}', '${this.valor}')`
    }

    public update() {
        return `UPDATE produtos SET nome = '${this.nome}', descricao = '${this.descricao}', valor = '${this.valor}' WHERE id = ${this.id}`
    }

    public delete() {
        return `DELETE FROM produtos WHERE id = ${this.id}`
    }

    public read() {
        return this.id == undefined ? `SELECT * FROM produtos` : `SELECT * FROM produtos WHERE id = ${this.id}`
    }
}