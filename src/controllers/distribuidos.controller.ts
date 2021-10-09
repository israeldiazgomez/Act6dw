import { Request, Response } from "express";
import { Distribuido } from "../models/distribuidos";


export class DistribuidoController{
    public index(req:Request, res:Response){
        Distribuido.findAll({})
               .then((distribuidos:Array<Distribuido>)=> res.json(distribuidos))
               .catch((err:Error) => res.status(500).json(err));
    }
}