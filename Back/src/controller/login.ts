import { Request, Response } from "express";
import { connection } from "../dao/connectionsql";
import { Usuario } from "../model/usuario";

export type userType = {
    username: string,
    password: string,
}

export const listar = (req: Request, res: Response) => {
    connection.query('SELECT * FROM usuario', (err, result) => {
        if (err) {
            res.status(500).end();
        } else {
            res.json(result).status(200).end();
        }
    });
}

export const criar = (req: Request, res: Response) => {
    let { username, password }: userType = req.body;

    connection.query(`INSERT INTO usuario (username, password) VALUE ('${username}', '${password}')`, (err, result) => {
        if (err) {
            res.status(500).end();
        } else {
            res.json(result).status(201).end();
        }
    });
}

export const logar = (req: Request, res: Response) => {

    let { username, password }: userType = req.body;

    connection.query(`SELECT * FROM usuario WHERE username = '${username}' AND password = '${password}'`, (err, result) => {
        if (err) {
            res.status(500).end();
        } else {
            if (result.length > 0) {
                console.log("Usuario encontrado");
                res.json(result).status(200).end();
            } else {
                res.send("Usuario nao encontrado").status(404).end();
            }
        }
    });

}
export const deletar = (req: Request, res: Response) => {
    let { username } = req.params;

    connection.query(`DELETE FROM usuario WHERE id = ${username}`, (err, result) => {
        if (err) {
            res.status(500).end();
        } else {
            res.json(result).status(200).end();
        }
    });

}

export const atualizar = (req: Request, res: Response) => {
    let { username } = req.params;

    connection.query(`UPDATE usuario SET username = '${req.body.username}', password = '${req.body.password}' WHERE username = ${username}`, (err, result) => {
        if (err) {
            res.status(500).end();
        } else {
            res.json(result).status(200).end();
        }
    });

}
