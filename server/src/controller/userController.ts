import userService from "../services/userService";


class UserController {
    async registration  (req: Request, res: any) {
        try {
            const {phoneNumber, password}: any = req.body;
            console.log(phoneNumber, password)
            await userService.registration(phoneNumber, password)
            return res.json('Вы успешно зарегистрированы')
        } catch (error: any) {
            return  res.json(error.message)
        }
    }
}

export default new UserController()