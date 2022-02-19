import * as express from 'express';
import * as WebSocket from 'ws';
import router from './router';
import * as cookieParser from 'cookie-parser';
import * as path from 'path';
import * as fileUpload from 'express-fileupload';
import * as cors from 'cors';
import * as mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import User from './models/userModel';
import Room from './models/roomModel';
dotenv.config();

const app = express();


app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(cookieParser());
app.use(fileUpload({}));
app.use(cors());
app.use('/api', router);

const ws = new WebSocket.Server({ 
    port: 5000,
}, () => console.log(`WS server started on port ${process.env.WS_PORT}`));
ws.on('connection', (ws: any) => {
    ws.on('message',(message: any) => {
        message = JSON.parse(message);
        switch (message.event) {
            case 'message':
                addMessToRoom(message)
                broadcastMessage(message)
                break;
            case 'connection':
                break;
        }
    })
})
const addMessToRoom = async (message: any) => {
    const room = await Room.findOne({_id: message.messageId})
    room.messages.push(message)
    room.save()
}

const broadcastMessage = async (message: any) => {
    const user = await User.findOne({phoneNumber :message.from})
    ws.clients.forEach((client: any) => {
        if(user.rooms.filter((room :any) => room._id = message.messageId).length){
            client.send(JSON.stringify(message))
        }
            
    })
}

const startServer = async () => {
    try {
        await mongoose.connect(`${process.env.DB_URL}`);
        app.listen(`${process.env.SERVER_PORT}` || 4000, () => {
            console.log(`Server started on port ${process.env.SERVER_PORT}`);
        });
    } catch (error) {
        console.log(error)
    }
}
startServer()