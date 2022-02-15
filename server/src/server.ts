import * as express from 'express';
import * as WebSocket from 'ws';
import router from './router';
import * as cookieParser from 'cookie-parser';
import * as path from 'path';
import * as fileUpload from 'express-fileupload';
import * as cors from 'cors';
import * as mongoose from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config();

const app = express();
function loggerMiddleware(request: express.Request, response: express.Response, next: any) {
    console.log(`${request.method} ${request.path}`);
    next();
  }


app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(cookieParser());
app.use(fileUpload({}));
app.use(cors());
app.use(loggerMiddleware)
app.use('/api', router);

const ws = new WebSocket.Server({ 
    port: 5000,
}, () => console.log(`WS server started on port ${process.env.WS_PORT}`));

ws.on('connection', (ws) => {
    ws.on('message', (message: any) => {
        message = JSON.parse(message)
        switch (message.event) {
            case 'message':
                broadcastMessage(message)
                break;
            case 'connection':
                broadcastMessage(message)
                break;
        }
    })
})
const broadcastMessage = (message: any) => {
    ws.clients.forEach((client) => {
        client.send(JSON.stringify(message))
    })
}

const startServer = async () => {
    try {
        await mongoose.connect(`${process.env.DB_URL}`);
        app.listen(process.env.PORT || 6000, () => {
            console.log(`Server started on port ${process.env.SERVER_PORT}`);
        });
    } catch (error) {
        console.log(error)
    }
}
startServer()