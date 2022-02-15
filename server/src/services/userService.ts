import User from '../models/userModel';
import* as bcrypt from 'bcrypt';


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
}

export default new UserService()