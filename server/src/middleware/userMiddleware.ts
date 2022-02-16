import tokenService from "../services/tokenService";

export default (req: any, res: any, next: any) => {
    try {
        const accessToken = req.headers.autorization.split(' ')[1];
        if(!accessToken){
            throw new Error('У вас нет доступа')
        }
        const tokenData =  tokenService.validAccessToken(accessToken);
        if(!tokenData){
            throw new Error('Invalid data')
        }
        next()
    } catch (error: any) {
        return res.status(400).json(error.message)
    }
}