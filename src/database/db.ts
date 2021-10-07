const Sequelize = require('sequelize');


const BD_NAME = 'db_osito';

const BD_USER = 'tigre';
const BD_PASS = 'QWER..1234-3..aaa3i';

export const database = new Sequelize(

    BD_NAME,
    BD_USER,
    BD_PASS,

    {
        host:'localhost',
        dialect: 'mysql',
        port: 3306
    }
);

database.sync( {force: true})
    .then(function(){
        console.log('Creda correctamente')
    })