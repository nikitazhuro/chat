import * as mongoose from 'mongoose';


const User = new mongoose.Schema({
    phoneNumber: {type: String, required: true, unique: true},
    password: {type: String, required: true}
})

export default mongoose.model('User', User)