"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Sequelize } = require('sequelize');
const DB_NAME = 'market';
const USER_NAME = 'postgres';
const PASSWORD = 'Eva2020';
const sequelize = new Sequelize(DB_NAME, USER_NAME, PASSWORD, {
    host: 'localhost',
    dialect: 'postgres'
});
exports.default = sequelize;
