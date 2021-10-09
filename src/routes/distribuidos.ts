import { Request, Response, Application } from "express";
import { DistribuidoController } from "../controllers/distribuidos.controller";

export class DistribuidoRoutes{
    public distribuidoController: DistribuidoController = new DistribuidoController();
    public routes(app: Application): void{
        app.route('/distribuidos').get(this.distribuidoController.index);
    }

}