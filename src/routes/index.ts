import { ClienteRoutes} from './cliente'
import {ProductoRoutes} from './producto'
import {ProveedoreRoutes} from './proveedores';
import { DistribuidoRoutes } from './distribuidos';
import { CompraRoutes } from './compra';


export class Routes {
    public clienteRoutes: ClienteRoutes = new ClienteRoutes();
    public productoRoutes: ProductoRoutes = new ProductoRoutes();
    public proveedoreRoutes: ProveedoreRoutes = new ProveedoreRoutes();
    public distribuidoRoutes: DistribuidoRoutes = new DistribuidoRoutes();
    public compraRoutes: CompraRoutes = new CompraRoutes();
}


