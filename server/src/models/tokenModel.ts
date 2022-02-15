import * as mongoose from 'mongoose';
import User from './userModel'


const Token = new mongoose.Schema({
    user: {type: mongoose.Types.ObjectId, ref: User},
    refreshToken: {type: String, required: true}
})

export default mongoose.model('Token', Token)