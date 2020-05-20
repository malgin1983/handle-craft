import {Router} from 'express'
import { RegistrationController, LoginController } from '../controllers/AuthController'

const router = Router()
    router.get('/register', RegistrationController )
    router.get('/login', LoginController )

module.exports = router;

