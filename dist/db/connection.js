"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
//la base de datos estará off al momento de la finalización de este proyecto.
const db = new sequelize_1.Sequelize('node', 'root', 'seba', {
    host: 'localhost',
    dialect: 'mysql',
    //logging: false
});
exports.default = db;
//# sourceMappingURL=connection.js.map