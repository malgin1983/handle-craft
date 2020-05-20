import {Router} from 'express'
import {Request, Response, NextFunction} from 'express'
import * as bcript  from 'bcryptjs'
import User, { IUser } from '../models/user';

interface  ILoginController {
    (req: Request, res: Response) : Promise<IUser>
}
export const RegistrationController = async (req: Request, res: Response) => {
    try {
        const{ email, password} = req.body
        const candidate = await User.findOne({email})
        if(!candidate) {
            res.status(200).send({
                message: 'GET_REQUEST_REGISTER_SUCCESS'
            })
         const hashPassword =  await bcript.compare( password , '7') ;
            const user = new User({email, password: hashPassword})
        }
    } catch (e) {
        console.error('User already exists', e )
    }
};
export const LoginController  =  async (req: Request, res: Response) => {
    try {
        res.status(200).send({
            message: 'GET_LOGIN_SUCCESS'
        })
    } catch (e) {
        res.status(500).send({
            message: 'GET_LOGIN_ERROR'
        })
    }
};

