import {Request, Response, NextFunction} from 'express'
import * as bcript  from 'bcryptjs'
import User  from '../models/user';
import {  validationResult } from 'express-validator'
import jwt  from 'jsonwebtoken'
import config from 'config';

interface  IAuthController {
    (req: Request, res: Response) : void
}
export const RegistrationController: IAuthController = async (req: Request, res: Response) => {
    try {
        const  errors = validationResult( req)
        if (!errors.isEmpty()) {
            res.status(400).json({
                message: 'Incorrect data registration',
                errors: errors.array()
            })
        }
        const{ email, password} = req.body
        const candidate = await User.findOne({email})
        if(candidate) {
            res.status(400).json({
                message: 'User already exists'
            })
         const hashPassword =  await bcript.compare( password , '7') ;
         const user = new User({email, password: hashPassword})
         await  user.save()
            res.status(201).json({
                message: 'User created success',
            })
        }
    } catch (e) {
        res.status(500).json({
            message: 'Error registration data',
        })
    }
};


export const LoginController: IAuthController  =  async (req: Request, res: Response) => {
    try {
        const  errors = validationResult( req)
        if (!errors.isEmpty()) {
            res.status(400).json({
                message: 'Incorrect data login',
                errors: errors.array(),
            })
        }
        const{ email, password} = req.body
        const user = await User.findOne({email})
        if(!user) {
            res.status(400).json({
                message: 'User is not registered',
            })
            const isMatch = bcript.compare(password, user.password)
            if (!isMatch) {
                res.status(400).json({
                    message: 'Invalid password',
                })
            }
            else {
                const token = jwt.sign(
                    { userId: user.id},
                    config.get('privateKey'),
                    {expiresIn: '4h'}
                )
                res.json({token, id: user.id})
            }
        }
    } catch (e) {
        res.status(500).json({
            message: 'Error registration data',
        })
    }
};

