import React, { FC } from "react";
import ChatWindow from "../components/ChatWindow";
import LeftMenu from "../components/LeftMenu";
import MyModal from "../components/UI/modal/MyModal";
import { useTypedSelector } from "../hooks/useTypedSelector";
import сlasses from '../styles/mainPage.module.css' 

const Chat:FC = () => {
    const {isAuth} = useTypedSelector(state => state.authUser)
    console.log(isAuth)
    return (
        <div className={сlasses.MainPage}>
            <div className={сlasses.LeftMenu_Block}>
                <LeftMenu/>
            </div>
            <div className={сlasses.ChatWindow_Block}>
                <MyModal/>
                <ChatWindow/>
            </div>
        </div>
    )
}

export default Chat;