
 import exp from 'constants';
 import {Model, DataTypes} from 'sequelize';
// const Sequelize = require('sequelize');
import { database } from '../database/db';
import { Proveedore } from './proveedores';

export class Distribuido extends Model {
    public cantidad!: number;
    
}


export interface DistribuidoI{
     cantidad: number;
    
}
Distribuido.init(
    {
        cantidad: {
            type:DataTypes.INTEGER,
            allowNull: false 
        },

        
    },

    {
        tableName: "Distribuidos",
        sequelize: database,
        timestamps: true 
    }
);