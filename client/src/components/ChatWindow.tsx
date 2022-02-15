import React, { FC, useLayoutEffect, useRef, useState } from "react";
import classes from '../styles/ChatWindow.module.css'
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";
import avatar from '../img/avatar.jpg'

interface IMessage {
    event?: string,
    id?: number,
    value?: string,
    userName?: string,
    date?: string
}
const ChatWindow:FC = () => {
    const [text, setText] = useState('');
    const [messageList, setMessageList] = useState<any[]>([])
    const socket = useRef<WebSocket>()
    const sendAMessage = () => {
        const message = {
            userName: 'Nkita',
            id: Date.now(),
            value: text,
            event: 'message'
        }
        socket.current?.send(JSON.stringify(message))
        setText('')
    }
    useLayoutEffect(() => {
        socket.current = new WebSocket('ws://localhost:5000');
        socket.current.onopen = () => {
            console.log('Соединение установлено')
            const message: IMessage = {
                event: 'connention',
                id: Date.now(),
                value: 'К чату присоединился Nikita',
                userName: 'Nikita',
                date: '15.02.2022'
            }
            socket.current?.send(JSON.stringify(message))
        }
        socket.current.onmessage = (event) => {
            const message = JSON.parse(event.data)
            console.log(message)
            setMessageList((prev: any) => [...prev, message])
        }
        socket.current.onclose = () => {
            console.log('Socket закрыт')
        }
        socket.current.onerror = () => {
            console.log('Socket ошибка')
        }
    }, [])
    return (
        <div className={classes.ChatWindow}>
            <div className={classes.ChatWindow_ContentBlock}>
                <div className={classes.ChatWindow_Nav}>
                    <div>
                        
                    </div>
                </div>
                <div className={classes.ChatWindow_ChatBlock}>
                    <div className={classes.ChatWindow_Messages}>
                        <div className={classes.ChatWindow_MessagesWrapper}>
                            <div className={classes.ChatWindow_MessageList}>
                                {messageList.map(elem => 
                                <div className={classes.ChatWindow_MessageList_Content}>
                                    <div className={classes.ChatWindow_MessageList_avatarBlock}>
                                        <img className={classes.avatar} src={avatar} />
                                    </div>
                                    <div className={classes.ChatWindow_MessageBlock}>
                                        <div className={classes.ChatWindow_MessageBlock_title}>
                                            <h2>{elem.userName}</h2>
                                        </div>
                                        <div className={classes.ChatWindow_MessageBlock_text}>
                                            <p>{elem.value}</p>
                                        </div>
                                    </div>
                                </div>)}
                            </div>
                        </div>
                    </div>
                    <div className={classes.ChatWindow_textareaBlock}>
                        <div className={classes.ChatWindow_textareaWrapper}>
                            <div className={classes.ChatWindow_textarea_input}>
                                <MyInput
                                onChange={(e) => setText(e.target.value)}
                                placeholder="Put a message"/>     
                            </div>
                            <div className={classes.ChatWindow_textarea_button}>
                                <MyButton onClick={sendAMessage}><span>hi</span></MyButton>
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
        </div>
    )
}

export default ChatWindow