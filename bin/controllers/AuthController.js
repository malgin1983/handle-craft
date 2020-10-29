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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcript = __importStar(require("bcryptjs"));
const user_1 = __importDefault(require("../models/user"));
const express_validator_1 = require("express-validator");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("config"));
exports.RegistrationController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const errors = express_validator_1.validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).json({
                message: 'Incorrect data registration',
                errors: errors.array()
            });
        }
        const { email, password } = req.body;
        const candidate = yield user_1.default.findOne({ email });
        if (candidate) {
            res.status(400).json({
                message: 'User already exists'
            });
            const hashPassword = yield bcript.compare(password, '7');
            const user = yield user_1.default.create({ email, password: hashPassword });
            if (!!user)
                res.status(201).json({
                    message: 'User created success',
                });
        }
    }
    catch (e) {
        res.status(500).json({
            message: 'Error registration data',
        });
    }
});
exports.LoginController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const errors = express_validator_1.validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).json({
                message: 'Incorrect data login',
                errors: errors.array(),
            });
        }
        const { email, password } = req.body;
        const user = yield user_1.default.findOne({ email });
        if (!user) {
            res.status(400).json({
                message: 'User is not registered',
            });
            const isMatch = bcript.compare(password, user.password);
            if (!isMatch) {
                res.status(400).json({
                    message: 'Invalid password',
                });
            }
            else {
                const token = jsonwebtoken_1.default.sign({ userId: user.id }, config_1.default.get('privateKey'), { expiresIn: '4h' });
                res.json({ token, id: user.id });
            }
        }
    }
    catch (e) {
        res.status(500).json({
            message: 'Error registration data',
        });
    }
});
