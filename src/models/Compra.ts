const Sequelize = require ('sequelize');
import { database } from '../database/db';

export class Compra extends Sequelize.Model {
    public fecha!: Date;
}

export interface CompraI {
    fecha: Date;
}

Compra.init (
    {
        fecha: {
            type: Sequelize.DataTypes.DATE,
            allowNull: false
        },
    },

    {
        tableName: "compras",
        sequelize: database,
        timestamps: true
    }
);