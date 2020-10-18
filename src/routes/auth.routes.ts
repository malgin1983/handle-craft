import {Router} from 'express'
import { RegistrationController, LoginController } from '../controllers/AuthController'
import { check } from 'express-validator'

const router = Router()

  // api/auth/register
    router.get('/register', [
        check('email', 'Incorrect registration email').isEmail(),
        check('password', 'Min size 6 articles').isLength({min: 6}),
        ],
        RegistrationController
    )
// api/auth/login
    router.get('/login', [
        check('email', 'Incorrect login email').normalizeEmail().isEmail(),
        check('password', 'Incorrect password').exists(),
        ],
        LoginController
    )

module.exports = router

