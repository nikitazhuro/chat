import * as mongoose from 'mongoose';


const User = new mongoose.Schema({
    phoneNumber: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    firstName: {type: String},
    secondName: {type: String},
    personalInfo: {type: String},
    userName: {type: String},
    rooms: [],
    avatar: []
})

export default mongoose.model('User', User)