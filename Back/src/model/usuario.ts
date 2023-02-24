interface IUsuario {
    username?: string;
    password?: string;
    id?: number;
}

export class Usuario {
    private id: number | undefined;
    private username: string | undefined;
    private password: string | undefined;

    constructor(data : IUsuario) {
        this.username = data.username;
        this.password = data.password;
        this.id = data.id;
    }

    public logar() {
        return `SELECT * FROM usuario WHERE username = '${this.username}' AND password = '${this.password}'`
    }

    public create() {
        return `INSERT INTO usuario (username, password) VALUE ('${this.username}', '${this.password}')`
    }

    public update() {
        return `UPDATE usuario SET username = '${this.username}', password = '${this.password}' WHERE id = ${this.username}`
    }

    public delete() {
        return `DELETE FROM usuario WHERE id = ${this.username}`
    }

    public read() {
        return this.username == undefined ? `SELECT * FROM usuario` : `SELECT * FROM usuario WHERE id = ${this.username}`
    }
}