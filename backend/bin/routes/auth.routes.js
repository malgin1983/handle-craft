"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const User = __importStar(require("../models/User"));
const router = express_1.Router();
router.get('/register', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const candidate = yield User.findOne(email);
        res.status(200).send({
            message: 'GET_REQUEST_REGISTER_SUCCESS'
        });
    }
    catch (e) {
        console.error('GET_REGISTER_ERROR', e);
    }
}));
router.get('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).send({
            message: 'GET_LOGIN_SUCCESS'
        });
    }
    catch (e) {
        res.status(500).send({
            message: 'GET_LOGIN_ERROR'
        });
    }
}));
module.exports = router;
