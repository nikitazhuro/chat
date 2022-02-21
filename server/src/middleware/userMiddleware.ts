import tokenService from "../services/tokenService";
import * as express from 'express'

export default (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const accessToken: string = <string>req.headers.autorization;
        if(!accessToken.split(' ')[1]){
            throw new Error('У вас нет доступа')
        }
        const tokenData =  tokenService.validAccessToken(accessToken.split(' ')[1]);
        if(!tokenData){
            throw new Error('Invalid data')
        }
        next()
    } catch (error) {
        if(error instanceof Error){
            return  res.status(400).json(error.message)
        }
    }
}