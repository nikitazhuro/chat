import React, { FC } from "react";
import ChatWindow from "../components/ChatWindow";
import LeftMenu from "../components/LeftMenu";
import сlasses from '../styles/mainPage.module.css' 

const Chat:FC = () => {
    return (
        <div className={сlasses.MainPage}>
            <div className={сlasses.LeftMenu_Block}>
                <LeftMenu/>
            </div>
            <div className={сlasses.ChatWindow_Block}>
                <ChatWindow/>
            </div>
        </div>
    )
}

export default Chat;