import { ClienteRoutes} from './cliente'
import {ProductoRoutes} from './producto'

import { DistribuidoRoutes } from './distribuidos';

export class Routes {
    public clienteRoutes: ClienteRoutes = new ClienteRoutes();
    public productoRoutes: ProductoRoutes = new ProductoRoutes();

    public distribuidoRoutes: DistribuidoRoutes = new DistribuidoRoutes();
}


