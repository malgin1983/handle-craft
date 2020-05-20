"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("config"));
const DBconnection_1 = require("./DBconnection");
const PORT = config_1.default.get('port') || 4000;
const app = express_1.default();
const start = () => {
    app.get('/', (req, res) => {
        res.send('Server started');
    });
    DBconnection_1.connection().then(e => console.log('База MONOGO подключена', e));
    app.listen(PORT, () => console.log(`также сервер запущен по http://localhost:${PORT}`));
};
start();
