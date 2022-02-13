import React, { useState } from "react";
import MyButton from "../../UI/button/MyButton";
import MyInput from "../../UI/input/MyInput";
import classes from './ModalActiveChats.module.css';
import avatar from '../../../img/avatar.jpg'

const ModalActiveChats = () => {
    const [chatSearch, setChatSearch] = useState('')
    const [chats, setChats] = useState([
        {chatName: 'Crypton', lastMessage: {message: 'Hello, friend. How are u. tell me something', user: 'Tanya'}},
        {chatName: 'Crypton', lastMessage: {message: 'Hello, friend. How are u. tell me something', user: 'Tanya'}}
    ])
    return(
        <div className={classes.Chats}>
            <div className={classes.Chats_SearchBlock}>
                <div className={classes.Chats_Search}>
                    <MyInput 
                    value={chatSearch}
                    placeholder='Search...'
                    onChange={(e) => setChatSearch(e.target.value)}
                    />
                </div>
            </div>
            <div className={classes.Chats_ChatsBlock}>
                {chats.map(chat => 
                <div className={classes.Chats_ChatBlock}>
                    <div className={classes.Chats_ChatImg}>
                        <img className={classes.avatar} src={avatar}/>
                    </div>
                    <div className={classes.Chats_ChatInfo}>
                        <h2>{chat.chatName}</h2>
                        <div>
                            <span className={classes.Chats_ChatInfo_name}>{chat.lastMessage.user}:</span>
                            <span className={classes.Chats_ChatInfo_message}>{chat.lastMessage.message.slice(0, 25) + `...`}</span>
                        </div>
                    </div>
                </div>
                )}
            </div>
        </div>
    )
}

export default ModalActiveChats;