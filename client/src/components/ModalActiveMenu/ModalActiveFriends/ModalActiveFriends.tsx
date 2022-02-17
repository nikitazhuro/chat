import React, { useState } from "react";
import MyInput from "../../UI/input/MyInput";
import classes from './ModalActiveFriends.module.css';
import avatar from '../../../img/avatar.jpg';

const ModalActiveFriends = () => {
    const [chatSearch, setChatSearch] = useState('')
    const [chats, setChats] = useState([
        {userName: 'Alina', userNumber: +3752935846244},
        {userName: 'Nikita', userNumber: +375293584884},
        {userName: 'Tanya', userNumber: +3752935246244},
        {userName: 'Dany ', userNumber: +3752935845874},
        {userName: 'Alex ', userNumber: +3752935358244},
        {userName: 'Ilia ', userNumber: +375293578544},

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
                <div key={chat.userNumber} className={classes.Chats_ChatBlock}>
                    <div className={classes.Chats_ChatImg}>
                        <img className={classes.avatar} src={avatar}/>
                    </div>
                    <div className={classes.Chats_ChatInfo}>
                        <h2>{chat.userName}</h2>
                        <div>
                            <span className={classes.Chats_ChatInfo_name}>{chat.userNumber}</span>
                        </div>
                    </div>
                </div>
                )}
            </div>
        </div>
    )
}

export default ModalActiveFriends;