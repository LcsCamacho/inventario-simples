import { Request, Response } from "express";
import { connection } from "../dao/connectionsql";
import { Usuario } from "../model/usuario";

export type userType = {
    username: string,
    password: string,
}

export const listar = (req: Request, res: Response) => {
    let usuario = new Usuario(req.body);
    connection.query(usuario.read(), (err, result) => {
        if (err) {
            res.status(500).end();
        } else {
            res.json(result).status(200).end();
        }
    });
}

export const criar = (req: Request, res: Response) => {
    let data:userType = req.body;
    let usuario = new Usuario(data);

    connection.query(usuario.create(), (err, result) => {
        if (err) {
            res.status(500).end();
        } else {
            res.json(result).status(201).end();
        }
    });
}

export const logar = (req: Request, res: Response) => {
    let data:userType = req.body;
    let usuario = new Usuario(data);

    connection.query(usuario.logar(), (err, result) => {
        if (err) {
            res.status(500).end();
        } else {
            if (result.length > 0) {
                res.status(200).end()
            } else {
                res.status(404).end();
            }
        }
    });
}

export const deletar = (req: Request, res: Response) => {
    let data:userType = req.body;
    let usuario = new Usuario(data);

    connection.query(usuario.delete(), (err, result) => {
        if (err) {
            res.status(500).end();
        } else {
            res.json(result).status(200).end();
        }
    });

}

export const atualizar = (req: Request, res: Response) => {
    let data:userType = req.body;
    let usuario = new Usuario(data);

    connection.query(usuario.update(), (err, result) => {
        if (err) {
            res.status(500).end();
        } else {
            res.json(result).status(200).end();
        }
    });

}
