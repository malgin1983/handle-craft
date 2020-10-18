"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const DBconnection_1 = __importDefault(require("../DBconnection"));
const User = DBconnection_1.default.define('Auth', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: sequelize_1.DataTypes.INTEGER,
    },
    name: sequelize_1.DataTypes.STRING,
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
});
exports.default = User;
