import * as mongoose from 'mongoose';


const Room = new mongoose.Schema({
    users: [],
    messages: [],
    avatar: {type: String},
    roomName: {type: String}
})

export default mongoose.model('Room', Room)