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
    async authCheck (accessToken: string) {
        try {
            const tokenData:any = tokenService.validAccessToken(accessToken)
            const user = await User.findOne({phoneNumber: tokenData.userDto.phoneNumber})
            return user
        } catch (error: any) {
            throw new Error(`Ошибка получения данных: ${error.message}`)
        }
    }
    async logout (refreshToken: any) {
        try {
            await Token.deleteOne({refreshToken});
        } catch (error: any) {
            throw new Error(`Ошибка: ${error.message}`)
        }
    }

    async updateUser (phoneNumber: string, fileName: string, firstName: string, secondName: string, personalInfo: string){
        try {
            const user = await User.findOne({phoneNumber});
            if(user.avatar.length !== 0 && fileName) {
                console.log('Working')
                fs.rmSync(path.resolve(__dirname, '..', 'static', `${user.avatar[0]}`))
            }
            if(firstName){
                user.firstName = firstName;
            }
            if(fileName){
              user.avatar[0] = fileName; 
            }
            if(secondName){
                user.secondName = secondName;
            }
            if(personalInfo){
                user.personalInfo = personalInfo;
            }
            return user.save()
        } catch (e: any) {
            throw new Error(e.message)
        } 
    }
    async findAUser (phoneNumber: string) {
        try {
            const user = await User.findOne({phoneNumber});
            return user
        } catch (e: any) {
            throw new Error(e.message)
        }
    }
    async addContact (myPhoneNumber: string, contactPhoneNumber: string) {
        try {
            const user = await User.findOne({phoneNumber: myPhoneNumber})
            const contact = await User.findOne({phoneNumber: contactPhoneNumber})
            const newContactData = {
                phoneNumber: contact.phoneNumber,
                avatar: contact.avatar,
                firstName: contact.firstName,
                secondtName: contact.secondName
            }
            user.contacts.push(newContactData)
            return user.save()
        } catch (e: any) {
            throw new Error(e.message)
        }
    }
}

export default new UserService()