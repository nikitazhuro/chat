import Room from "../models/roomModel"
import User from "../models/userModel";

class RoomService {
    async createRoom (myPhoneNumber: string, contactPhoneNumber: string) {
        try {
            const room = await Room.findOne({users: [myPhoneNumber, contactPhoneNumber]})
            if(room && room.users.length == 2) {
                return room
            }
            const user = await User.findOne({phoneNumber: myPhoneNumber})
            const contact = await User.findOne({phoneNumber: contactPhoneNumber})

            const newRoom = await Room.create({
                users: [myPhoneNumber, contactPhoneNumber], 
                avatar: contact.avatar[0], 
                roomName: `${contact.firstName} ` + contact.secondName});

            user.rooms.push(newRoom)
            contact.rooms.push(newRoom)
            user.save()
            contact.save()
            return newRoom
        } catch (error: any) {
            throw new Error(error.message)
        }
    }
}

export default new RoomService()