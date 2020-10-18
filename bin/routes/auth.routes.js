"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AuthController_1 = require("../controllers/AuthController");
const express_validator_1 = require("express-validator");
const router = express_1.Router();
router.get('/register', [
    express_validator_1.check('email', 'Incorrect registration email').isEmail(),
    express_validator_1.check('password', 'Min size 6 articles').isLength({ min: 6 }),
], AuthController_1.RegistrationController);
router.get('/login', [
    express_validator_1.check('email', 'Incorrect login email').normalizeEmail().isEmail(),
    express_validator_1.check('password', 'Incorrect password').exists(),
], AuthController_1.LoginController);
module.exports = router;
