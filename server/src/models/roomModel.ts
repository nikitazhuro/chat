import * as mongoose from 'mongoose';


const Room = new mongoose.Schema({
    users: [{}],
    messages: [],
})

export default mongoose.model('Room', Room)