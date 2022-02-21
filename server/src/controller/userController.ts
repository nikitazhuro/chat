import userService from "../services/userService";
import * as express from 'express'
import * as uuid from 'uuid'
import * as path from 'path'

interface Iqw {
    authorization?: string
}

class UserController {
    async registration  (req: express.Request, res: express.Response) {
        try {
            const {phoneNumber, password}: any = req.body;
            await userService.registration(phoneNumber, password)
            return res.json('Вы успешно зарегистрированы')
        } catch (error) {
            if(error instanceof Error){
                return  res.status(400).json(error.message)
            }
        }
    }
    async login  (req: express.Request, res: express.Response) {
        try {
            const {phoneNumber, password}: any = req.body;
            const data = await userService.login(phoneNumber, password);
            res.cookie('refreshToken', data?.refreshToken, {maxAge: 30*24*60*60*1000, httpOnly: true});
            return res.json(data);
        } catch (error) {
            if(error instanceof Error){
                return  res.status(400).json(error.message)
            }
        }
    }
    async authCheck (req: express.Request, res: express.Response) {
        try {
            const accessToken: string = <string>req.headers.autorization;
            const user = await userService.authCheck(accessToken.split(' ')[1])
            return res.json(user)
        } catch (error) {
            if(error instanceof Error){
                return  res.status(400).json(error.message)
            }
        }
    }
    async logout (req: express.Request, res: express.Response) {
        try {
            const {refreshToken} = req.cookies;
            await userService.logout(refreshToken);
            res.clearCookie('refreshToken')
            return res.json('Вы вышли из аккаунта')
        } catch (error) {
            if(error instanceof Error){
                return  res.status(400).json(error.message)
            }
        }
    }
    async updateUser(req: express.Request, res: express.Response) {
        try {
            const {phoneNumber, firstName, secondName, personalInfo} = req.body;
            let image : any;
            if(req.files){
                const {img} = req.files;
                image = img
            }
            let fileName: any;
            if(image) {
                fileName = uuid.v4() + '.jpg';
                image.mv(path.resolve(__dirname, '..', 'static', fileName));
            }
            
            await userService.updateUser(phoneNumber, fileName, firstName, secondName, personalInfo)
            return res.json('complete')
        } catch (error) {
            if(error instanceof Error){
                return  res.status(400).json(error.message)
            }
        }
    }
    async findAUser (req: express.Request, res: express.Response) {
        try {
            const {phoneNumber} = req.body;
            const user = await userService.findAUser(phoneNumber);
            return res.json(user)
        } catch (error) {
            if(error instanceof Error){
                return  res.status(400).json(error.message)
            }
        }
    }
    async addContact (req: express.Request, res: express.Response) {
        try {
            const {myPhoneNumber, contactPhoneNumber} = req.body;
            await userService.addContact(myPhoneNumber, contactPhoneNumber);
            return res.json('Пользователь добавлен')
        } catch (error) {
            if(error instanceof Error){
                return  res.status(400).json(error.message)
            }
        }
    }
}

export default new UserController()