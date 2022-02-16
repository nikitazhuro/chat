import React, { FC, ReactChild, useState } from "react";
import classes from '../styles/LeftMenu.module.css'
import friends_svg from '../img/friends.svg'
import chats_svg from '../img/chats.svg'
import settings_svg from '../img/settings.svg'
import logo from '../img/4.png'
import avatar from '../img/avatar.jpg'
import { useDispatch } from "react-redux";
import { ActiveModalEnum } from "../store/reducers/activeMenu/types";
import { useTypedSelector } from "../hooks/useTypedSelector";


const LeftMenu:FC = () => {
    const {chats, settings, friends} = useTypedSelector(state => state.activeMenuReducer)
    const dispatch = useDispatch()
    return (
        <div className={classes.LeftMenu}>
            <div className={classes.logo_block}>
                <img className={classes.logo_img} src={logo}/>
            </div>
            <div className={classes.options_block}>
                <div className={classes.options_block_friends}>
                    <img 
                    onClick={() => dispatch({type: ActiveModalEnum.SET_ACTIVE_FRIENDS, payload: true})} 
                    className={friends ? classes.svg_icon_active : classes.svg_icon} 
                    src={friends_svg}
                    />
                </div>
                <div className={classes.options_block_chats}>
                    <img
                    onClick={() => dispatch({type: ActiveModalEnum.SET_ACTIVE_CHATS, payload: true})} 
                    className={chats ? classes.svg_icon_active : classes.svg_icon} 
                    src={chats_svg}/>
                </div>
            </div>
            <div className={classes.profile_block}>
                <div>
                    <img className={classes.avatar} src={avatar} />
                </div>
                <div className={classes.profile_block_svg}>
                    <img 
                    onClick={() => dispatch({type: ActiveModalEnum.SET_ACTIVE_SETTINGS, payload: true})} 
                    className={settings ? classes.svg_icon_active : classes.svg_icon} 
                    src={settings_svg}/>
                </div>
            </div>
        </div>
    )
}

export default LeftMenu