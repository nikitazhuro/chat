import React, { useState } from "react";
import MyInput from "../../UI/input/MyInput";
import glass from '../../../img/glass.svg';
import cross from '../../../img/cross.svg'
import classes from './ModalActiveChats.module.css';
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useNavigate } from "react-router-dom";

const ModalActiveChats = () => {
    const {rooms, phoneNumber} = useTypedSelector(state => state.userReducer);
    const router = useNavigate();
    const [chatSearch, setChatSearch] = useState('');
    const [activeSearch, setActiveSearch] = useState(false);
    const [activeIcon, setActiveIcon] = useState('glass');
    return(
        <div className={classes.Chats}>
            <div className={classes.Title}>
                <h1>Rooms</h1>
                {activeIcon == 'glass' && <img onClick={() => {setActiveSearch(true); setActiveIcon('cross')}} src={glass}/>}
                {activeIcon == 'cross' && <img onClick={() => {setActiveSearch(false); setActiveIcon('glass')}} src={cross}/>}
            </div>
            <div className={classes.Chats_SearchBlock}>
                <div className={activeSearch ? classes.Chats_Search_Active : classes.Chats_Search}>
                <MyInput
                type='text'
                value={chatSearch}
                placeholder='Search...'
                onChange={(e) => setChatSearch(e.target.value)}
                />
                </div>
            </div>
            <div className={classes.Chats_ChatsBlock}>
                {chatSearch
                ? rooms 
                    ? rooms.filter(room => 
                        room.users.filter((e: any) => e.phoneNumber !== phoneNumber)[0].userName.toLowerCase().includes(chatSearch.toLowerCase())
                    ).map((room, index) => 
                    <div key={index} onClick={() => router(`/chat/${room._id}`)} className={classes.Chats_ChatBlock}>
                        <div className={classes.Chats_ChatImg}>
                            <img className={classes.avatar} src={`http://localhost:4000/` + room.users.filter((e: any) => e.phoneNumber !== phoneNumber)[0].avatar}/>
                        </div>
                        <div className={classes.Chats_ChatInfo}>
                            <h2>{room.users.filter((e: any) => e.phoneNumber !== phoneNumber)[0].userName}</h2>
                        </div>
                    </div>) 
                    : <div><h1>???????????? ??????</h1></div>
                : rooms 
                    ? rooms.map((room, index) => 
                        <div key={index} onClick={() => router(`/chat/${room._id}`)} className={classes.Chats_ChatBlock}>
                            <div className={classes.Chats_ChatImg}>
                                <img className={classes.avatar} src={`http://localhost:4000/` + room.users.filter((e: any) => e.phoneNumber !== phoneNumber)[0].avatar}/>
                            </div>
                            <div className={classes.Chats_ChatInfo}>
                                <h2>{room.users.filter((e: any) => e.phoneNumber !== phoneNumber)[0].userName}</h2>
                            </div>
                        </div>
                    ) 
                    : <div><h1>???????????? ??????</h1></div>
                }
            </div>
        </div>
    )
}

export default ModalActiveChats;