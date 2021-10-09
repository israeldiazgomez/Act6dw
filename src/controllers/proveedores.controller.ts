import { Request, Response } from "express";
import { Proveedore } from "../models/proveedores";


export class ProveedoreController{
    public index(req:Request, res:Response){
        Proveedore.findAll({})
               .then((proveedores:Array<Proveedore>)=> res.json(proveedores))
               .catch((err:Error) => res.status(500).json(err));
    }
}