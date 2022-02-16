import User from '../models/userModel';
import* as bcrypt from 'bcrypt';
import UserDto from '../dtos/userDto';
import tokenService from './tokenService';
import Token from '../models/tokenModel';
import * as fs from 'fs'
import * as path from 'path'


class UserService {
    async registration (phoneNumber:string, password: string) {
        try {
            const candidate = await User.findOne({phoneNumber});
            if(candidate){
                throw new Error('Этот номер уже зарегистрирован');
            }

            const hashPassword = await bcrypt.hash(password, 5);
            await User.create({phoneNumber, password: hashPassword})
        } catch (error: any) {
            throw new Error(`Ошибка регистрации: ${error.message}`)
        }
    }
    async login (phoneNumber:string, password: string) {
        try {
            const user = await User.findOne({phoneNumber});
            if(!user){
                throw new Error('Пользователь не найден');
            }
            const hashPassword = await bcrypt.compare(password, user.password)
            if(!hashPassword){
                throw new Error('Неверно указан пароль')
            }
            const userDto = new UserDto(user);
            const tokens = tokenService.createTokens({userDto});
            await tokenService.saveTokens(userDto.id, tokens.refreshToken);

            return {...tokens, userDto}
        } catch (error: any) {
            throw new Error(`Ошибка регистрации: ${error.message}`)
        }
    }
    async logout (refreshToken: any) {
        const token = await Token.deleteOne({refreshToken});
        return token
    }

    async updateUser(phoneNumber: string, fileName: string){
        try {
            const user = await User.findOne({phoneNumber});
            if(user.avatar[0]){
                fs.rmSync(path.resolve(__dirname, '..', 'static', `${user.avatar[0]}`))
            }
            user.avatar[0] = fileName;
            return (user.save())
        } catch (e: any) {
            throw new Error(e.message)
        } 
    }
}

export default new UserService()