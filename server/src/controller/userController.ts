

class UserController {
    async registration  (req: Express.Request, res: any) {
        try {
            const user = {}
            return res.json(user)
        } catch (error: any) {
            return  res.json(error.message)
        }
    }
}

export default new UserController()