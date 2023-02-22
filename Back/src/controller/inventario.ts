import { Request, Response } from "express";
import { connection } from "../dao/connectionsql";
import { Produto } from "../model/produto";

export type inventarioType = {
    id: number,
    nome: string,
    descricao: string,
    valor: number,
}

export const listar = (req: Request, res: Response) => {
    connection.query('SELECT * FROM produtos', (err, result) => {
        if (err) {
            res.status(500).end();
        } else {
            res.json(result).status(200).end();
        }
    });
}

export const criar = (req: Request, res: Response) => {
    let { id, nome, descricao, valor }: inventarioType = req.body;

    connection.query(`INSERT INTO produtos (id, nome, descricao, valor) VALUE (${id}, '${nome}', '${descricao}', ${valor})`, (err, result) => {
        if (err) {
            res.status(500).end();
        } else {
            res.json(result).status(201).end();
        }
    });
}

export const deletar = (req: Request, res: Response) => {
    let { id } = req.params;

    connection.query(`DELETE FROM produtos WHERE id = ${id}`, (err, result) => {
        if (err) {
            res.status(500).end();
        } else {
            res.json(result).status(200).end();
        }
    });

}

export const atualizar = (req: Request, res: Response) => {
    let { id } = req.params;

    connection.query(`UPDATE produtos SET nome = '${req.body.nome}', descricao = '${req.body.descricao}', valor = ${req.body.valor} WHERE id = ${id}`, (err, result) => {
        if (err) {
            res.status(500).end();
        } else {
            res.json(result).status(200).end();
        }
    });

}
