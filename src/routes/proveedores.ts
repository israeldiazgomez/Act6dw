import { Request, Response, Application } from "express";
import { ProveedoreController } from "../controllers/proveedores.controller";

export class ProveedoreRoutes{
    public proveedoreController: ProveedoreController = new ProveedoreController();
    public routes(app: Application): void{
        app.route('/proveedores').get(this.proveedoreController.index);
    }

}