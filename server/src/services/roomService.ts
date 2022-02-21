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

            const myObject = {
                phoneNumber: myPhoneNumber,
                avatar: user.avatar[0],
                userName: `${user.firstName} ` + user.secondName
            }
            const userObject = {
                phoneNumber: contactPhoneNumber,
                avatar: contact.avatar[0],
                userName: `${contact.firstName} ` + contact.secondName
            }
            const newRoom = await Room.create({
                users: [myObject, userObject], 
            });
            user.rooms.push(newRoom)
            contact.rooms.push(newRoom)
            user.save()
            contact.save()
            return newRoom
        } catch (error) {
            if(error instanceof Error){
                throw new Error(error.message)
            }
        }
    }
    async getRoom (roomId: string) {
        try {
            const room = await Room.findOne({_id: roomId})
            if(!room){
                throw new Error('Такой комнаты не существует')
            }
            return room
        } catch (error) {
            if(error instanceof Error){
                throw new Error(error.message)
            }
        }
    }
}

export default new RoomService()