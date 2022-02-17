import cookieParser = require("cookie-parser");
import userService from "../services/userService";
import * as uuid from 'uuid'
import * as path from 'path'

class UserController {
    async registration  (req: Request, res: any) {
        try {
            const {phoneNumber, password}: any = req.body;
            await userService.registration(phoneNumber, password)
            return res.json('Вы успешно зарегистрированы')
        } catch (error: any) {
            return  res.status(400).json(error.message)
        }
    }
    async login  (req: Request, res: any) {
        try {
            const {phoneNumber, password}: any = req.body;
            const data = await userService.login(phoneNumber, password);
            res.cookie('refreshToken', data.refreshToken, {maxAge: 30*24*60*60*1000, httpOnly: true});
            return res.json(data);
        } catch (error: any) {
            return  res.status(400).json(error.message)
        }
    }
    async authCheck (req:any, res: any) {
        try {
            const accessToken = req.headers.autorization.split(' ')[1];
            const user = await userService.authCheck(accessToken)
            return res.json(user)
        } catch (error) {
            return res.status(400).json('Ошибка доступа')
        }
    }
    async logout (req:any, res: any) {
        try {
            const {refreshToken} = req.cookies;
            await userService.logout(refreshToken);
            res.clearCookie('refreshToken')
            return res.json('Вы вышли из аккаунта')
        } catch (e) {
            return res.status(400).json(e)
        }
    }
    async updateUser(req:any, res: any) {
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
        } catch (e: any) {
            return res.status(400).json(e.message)
        }
    }
}

export default new UserController()