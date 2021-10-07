import { Request, Response } from "express";
import { Cliente } from "../models/Cliente";


export class ClienteController {
    public index(req: Request, res: Response){
        Cliente.findAll({})
            .then((users: Array<Cliente>) => res.json(users))
            .catch((err: Error) => res.status(500).json(err))
    }
}
