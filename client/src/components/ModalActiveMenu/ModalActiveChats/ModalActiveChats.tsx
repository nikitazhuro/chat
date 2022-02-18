import React, { useState } from "react";
import MyInput from "../../UI/input/MyInput";
import classes from './ModalActiveChats.module.css';
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useNavigate } from "react-router-dom";

const ModalActiveChats = () => {
    const [chatSearch, setChatSearch] = useState('');
    const {rooms} = useTypedSelector(state => state.userReducer);
    const router = useNavigate()
    console.log(rooms)
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
                {rooms 
                ? rooms.map((room, index) => 
                <div key={index} onClick={() => router(`/chat/${room._id}`)} className={classes.Chats_ChatBlock}>
                    <div className={classes.Chats_ChatImg}>
                        <img className={classes.avatar} src={`http://localhost:4000/` + room.avatar}/>
                    </div>
                    <div className={classes.Chats_ChatInfo}>
                        <h2>{room.roomName}</h2>
                        <div>
                            <span className={classes.Chats_ChatInfo_name}></span>
                            <span className={classes.Chats_ChatInfo_message}></span>
                        </div>
                    </div>
                </div>
                ) 
                : <div><h1>Комнат нет</h1></div>}
            </div>
        </div>
    )
}

export default ModalActiveChats;