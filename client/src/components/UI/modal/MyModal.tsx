import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { ActiveModalEnum } from "../../../store/reducers/activeMenu/types";
import { ShowModalActionsEnum } from "../../../store/reducers/showModal/types";
import ModalActiveChats from "../../ModalActiveMenu/ModalActiveChats/ModalActiveChats";
import ModalActiveFriends from "../../ModalActiveMenu/ModalActiveFriends/ModalActiveFriends";
import ModalActiveSettings from "../../ModalActiveMenu/ModalActiveSettings/ModalActiveSettings";
import classes from './MyModal.module.css'


const MyModal:FC = () => {
    const {chats, friends, settings} = useTypedSelector(state => state.activeMenuReducer);
    const {showModal} = useTypedSelector(state => state.showModalReducer)
    const dispatch = useDispatch()
    let mixStyle = [classes.MyModal]
    const setModalUnactive = () => {
        dispatch({type: ShowModalActionsEnum.SET_SHOWMODAL, payload: false})
        setTimeout(() => {
            dispatch({type: ActiveModalEnum.SET_UNACTIVE , payload: false})
        }, 600)
    }
    if(showModal) {
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