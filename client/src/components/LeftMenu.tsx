import React, { FC } from "react";
import classes from '../styles/LeftMenu.module.css'
import friends_svg from '../img/friends.svg'
import chats_svg from '../img/chats.svg'
import settings_svg from '../img/settings.svg'
import logo from '../img/4.png'
import { useDispatch } from "react-redux";
import { ActiveModalEnum } from "../store/reducers/activeMenu/types";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useNavigate } from "react-router-dom";
import { ShowModalActionsEnum } from "../store/reducers/showModal/types";


const LeftMenu:FC = () => {
    const {chats, settings, friends} = useTypedSelector(state => state.activeMenuReducer);
    const {avatar} = useTypedSelector(state => state.userReducer);
    const dispatch = useDispatch();
    const router = useNavigate();

    const activateFriends = () => {
        dispatch({type: ActiveModalEnum.SET_ACTIVE_FRIENDS, payload: true});
        dispatch({type: ShowModalActionsEnum.SET_SHOWMODAL, payload: true});
    }
    const activateChats = () => {
        dispatch({type: ActiveModalEnum.SET_ACTIVE_CHATS, payload: true});
        dispatch({type: ShowModalActionsEnum.SET_SHOWMODAL, payload: true});
    }
    const activateSettings = () => {
        dispatch({type: ActiveModalEnum.SET_ACTIVE_SETTINGS, payload: true});
        dispatch({type: ShowModalActionsEnum.SET_SHOWMODAL, payload: true});
    }
    return (
        <div className={classes.LeftMenu}>
            <div className={classes.logo_block}>
                <img onClick={() => router('/chat')} className={classes.logo_img} src={logo}/>
                <div className={classes.elem}></div>
            </div>
            <div className={classes.options_block}>
                <div className={classes.options_block_friends}>
                    <img 
                    onClick={activateFriends} 
                    className={friends ? classes.svg_icon_active : classes.svg_icon} 
                    src={friends_svg}
                    />
                </div>
                <div className={classes.options_block_chats}>
                    <img
                    onClick={activateChats} 
                    className={chats ? classes.svg_icon_active : classes.svg_icon} 
                    src={chats_svg}/>
                </div>
            </div>
            <div className={classes.profile_block}>
                <div>
                    <img className={classes.avatar} src={`http://localhost:4000/` + avatar} />
                </div>
                <div className={classes.profile_block_svg}>
                    <img 
                    onClick={activateSettings} 
                    className={settings ? classes.svg_icon_active : classes.svg_icon} 
                    src={settings_svg}/>
                </div>
            </div>
        </div>
    )
}

export default LeftMenu