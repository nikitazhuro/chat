import roomService from "../services/roomService";

class RoomController {
    async createRoom  (req: any, res: any) {
        try {
            const {myPhoneNumber, contactPhoneNumber} = req.body;
            const room = await roomService.createRoom(myPhoneNumber, contactPhoneNumber)
            return res.json(room)
        } catch (error: any) {
            return  res.status(400).json(error.message)
        }
    }
}

export default new RoomController()