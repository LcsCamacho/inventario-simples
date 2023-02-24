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
    let produto = new Produto(req.params)

    connection.query(produto.read(), (err, result) => {
        if (err) {
            res.status(500).end();
        } else {
            res.json(result).status(200).end();
        }
    });
}

export const criar = (req: Request, res: Response) => {
    let data: inventarioType = req.body;
    let produto = new Produto(data)

    connection.query(produto.create(), (err, result) => {
        if (err) {
            res.status(500).end();
        } else {
            res.json(result).status(201).end();
        }
    });
}

export const deletar = (req: Request, res: Response) => {
    let { id } = req.params;
    let produto = new Produto({ id: Number(id) })

    connection.query(produto.delete(), (err, result) => {
        if (err) {
            res.status(500).end();
        } else {
            res.json(result).status(200).end();
        }
    });

}

export const atualizar = (req: Request, res: Response) => {
    let { id } = req.params;
    let data: inventarioType = {
        id: Number(id),
        ...req.body
    };
    let produto = new Produto(data);

    connection.query(produto.update(), (err, result) => {
        if (err) {
            res.status(500).end();
        } else {
            res.json(result).status(200).end();
        }
    });

}
