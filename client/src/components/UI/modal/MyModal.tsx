import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { ActiveModalEnum } from "../../../store/reducers/activeMenu/types";
import ModalActiveChats from "../../ModalActiveMenu/ModalActiveChats/ModalActiveChats";
import ModalActiveFriends from "../../ModalActiveMenu/ModalActiveFriends/ModalActiveFriends";
import ModalActiveSettings from "../../ModalActiveMenu/ModalActiveSettings/ModalActiveSettings";
import classes from './MyModal.module.css'


const MyModal:FC = () => {
    const {chats, friends, settings} = useTypedSelector(state => state.activeMenuReducer)
    const dispatch = useDispatch()
    const setModalUnactive = () => {
        dispatch({type: ActiveModalEnum.SET_UNACTIVE , payload: false})
    }
    const mixStyle = [classes.MyModal]
    if(chats || friends || settings) {
        mixStyle.push(classes.Active)
    }
    return(
        <div 
        className={mixStyle.join(' ')}
        onClick={setModalUnactive}
        >
            <div 
            className={classes.MyModal_Content} 
            onClick={(e) => e.stopPropagation()}
            >
                {friends && <ModalActiveFriends/>}
                {chats && <ModalActiveChats/>}
                {settings && <ModalActiveSettings/>}
            </div>
        </div>
    )
} 

export default MyModal;