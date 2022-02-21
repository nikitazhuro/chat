import React, { FC, useEffect, useRef, useState } from "react";
import classes from '../styles/ChatWindow.module.css'
import MyButton from "./UI/button/MyButton";
import { useParams } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { getRoom } from "../http/roomApi";
import { IMessage } from "../types";

interface IRoom {
    avatar: string, 
    roomName:string
}


interface IServerData {
    users: string []
    messages: IMessage[]
}

const ChatWindow:FC = () => {
    const {roomId} = useParams<string>();
    const {phoneNumber, firstName, secondName, avatar} = useTypedSelector(state => state.userReducer);
    console.log(roomId)
    const textArea = useRef<HTMLTextAreaElement>(null);
    const scrollList = useRef<HTMLInputElement>(null);
    const [text, setText] = useState<string>('');
    const [room, setRoom] = useState<IRoom>({
        avatar: '',
        roomName: ''
    })
    const [serverData, setServerData] = useState<IServerData>()
    const [messageList, setMessageList] = useState<IMessage[]>([])
    const socket = useRef<WebSocket>();

    const autosize = () => {
        setTimeout(function(){
            if(textArea && textArea.current){
               textArea.current.style.cssText = 'height:auto';
               textArea.current.style.cssText = 'height:' + textArea.current.scrollHeight + 'px'; 
            }
        },0);
      }
    const scrollToBottom = () => {
		if(scrollList && scrollList.current){
            scrollList.current.scrollTop = scrollList.current.scrollHeight;
        }
	};
    const sendAMessage = () => {
        if(roomId){
            const message: IMessage = {
                id: Date.now(),
                event: 'message',
                messageId : roomId,
                userName: `${firstName} ` + secondName,
                from: phoneNumber,
                avatar,
                value: text,
            }
            socket.current?.send(JSON.stringify(message))
            setText('')
        }
    }
    useEffect(() => {
        socket.current?.close()
        if(roomId){
            const messages = async() => {
                const data = await getRoom(roomId);
                setRoom({...room, 
                avatar: data.users.filter((e: any) => e.phoneNumber !== phoneNumber)[0].avatar, 
                roomName: data.users.filter((e: any) => e.phoneNumber !== phoneNumber)[0].userName})
                setMessageList([...data.messages])
                setServerData({...data})
            }
            messages()
        }
        socket.current = new WebSocket(`ws://localhost:5000`);
        socket.current.onopen = () => {
            console.log('Соединение установлено')
        }
        socket.current.onmessage = (event) => {
            const message = JSON.parse(event.data)
            if(roomId == message.messageId){
               setMessageList((prev: any) => [...prev, message])
               scrollToBottom() 
            }
        }
        socket.current.onclose = () => {
            console.log('Socket закрыт')
        }
        socket.current.onerror = () => {
            console.log('Socket ошибка')
        }
    }, [roomId])
    return (
        <div className={classes.ChatWindow}>
            <div className={serverData?.users && roomId ? classes.ChatWindow_ContentBlock : classes.ChatWindow_Dnone}>
                <div className={classes.ChatWindow_Nav}>
                    <div className={classes.Nav_Block}>
                        <div className={classes.Nav_BlockContent}>
                            <div className={classes.Nav_Avatar}>
                                <img src={`http://localhost:4000/` + room.avatar}/>
                            </div>
                            <div className={classes.Nav_title}>
                                <h2>{room.roomName}</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.ChatWindow_ChatBlock}>
                    <div className={classes.ChatWindow_Messages}>
                        <div className={classes.ChatWindow_MessagesWrapper}>
                            <div ref={scrollList} className={classes.ChatWindow_MessageList}>
                                {messageList.map(elem => 
                                <div key={elem.id} className={elem.from == phoneNumber ? classes.MyMessageBlock : classes.UserMessageBlock}>
                                    <div>
                                    <div className={classes.ChatWindow_MessageList_Content}>
                                        <div className={elem.from == phoneNumber ? classes.ChatWindow_MyMessageBlock : classes.ChatWindow_UserMessageBlock}>
                                            <div className={classes.ChatWindow_MessageBlock_text}>
                                                <span>{elem.value}</span>
                                            </div>
                                        </div>
                                        <div className={elem.from == phoneNumber ? classes.ChatWindow_MyMessageList_avatarBlock : classes.ChatWindow_UserMessageList_avatarBlock}>
                                            {elem.from == phoneNumber
                                            ? <div style={{display: 'flex', alignItems: 'center'}}> 
                                            <div style={{marginRight: '10px'}} className={classes.ChatWindow_MessageBlock_title}>
                                                <h2>{elem.from == phoneNumber ? 'You' :  elem.userName}</h2>
                                            </div>
                                            <img className={classes.avatar} src={`http://localhost:4000/`+ elem.avatar} />
                                            </div>
                                            : <div style={{display: 'flex', alignItems: 'center'}}>
                                                <img className={classes.avatar} src={`http://localhost:4000/`+ elem.avatar} />
                                            <div className={classes.ChatWindow_MessageBlock_title}>
                                                <h2>{elem.from == phoneNumber ? 'You' :  elem.userName}</h2>
                                            </div>
                                            </div>
                                            }
                                        </div>    
                                    </div>
                                    </div>
                                </div>)}
                            </div>
                            <div className={classes.ChatWindow_textareaWrapper}>
                            <div className={classes.ChatWindow_textarea_input}>
                                <textarea
                                ref={textArea}
                                onKeyDown={autosize}
                                rows={1}
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                placeholder="Put a message"/>
                            </div>
                            <div className={classes.ChatWindow_textarea_button}>
                                <MyButton onClick={sendAMessage}><span>Hi</span></MyButton>
                            </div>
                        </div>
                        </div>
                    </div>   
                </div>
            </div>
        </div>
    )
}

export default ChatWindow