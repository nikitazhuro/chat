import * as jwt from 'jsonwebtoken'
import Token from '../models/tokenModel';

class TokenService {
    createTokens (payload: object) {
        const accessToken: string = jwt.sign(payload, `${process.env.JWT_ACCESS_SECRET}`, {expiresIn: '1d'})
        const refreshToken: string = jwt.sign(payload, `${process.env.JWT_REFRESH_SECRET}`, {expiresIn: '10d'})
        return {
            accessToken,
            refreshToken
        }
    }
    validAccessToken(token: string) {
        try {
            const tokenData = jwt.verify(token, `${process.env.JWT_ACCESS_SECRET}`);
            return tokenData;
        } catch (error) {
            if(error instanceof Error){
                throw new Error(error.message)
            }
        }
    }
    async saveTokens (id: string, refreshToken: string) {
        const token = await Token.findOne({user: id})
        if(token){
            token.refreshToken = refreshToken;
            return token.save();
        }
        await Token.create({user: id, refreshToken});
    }
}

export default new TokenService()