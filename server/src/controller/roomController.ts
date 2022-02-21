import roomService from "../services/roomService";
import * as express from 'express';

class RoomController {
    async createRoom  (req: express.Request, res: express.Response) {
        try {
            const {myPhoneNumber, contactPhoneNumber} = req.body;
            const room = await roomService.createRoom(myPhoneNumber, contactPhoneNumber)
            return res.json(room)
        } catch (error) {
            if(error instanceof Error){
                return  res.status(400).json(error.message)
            }
        }
    }
    async getRoom  (req: express.Request, res: express.Response) {
        try {
            const {roomId} = req.body;
            const room = await roomService.getRoom(roomId)
            return res.json(room)
        } catch (error) {
            if(error instanceof Error){
                return  res.status(400).json(error.message)
            }
        }
    }
}

export default new RoomController()