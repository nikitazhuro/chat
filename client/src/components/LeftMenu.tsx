import React, { FC } from "react";
import classes from '../styles/LeftMenu.module.css'
import friends from '../img/friends.svg'
import chats from '../img/chats.svg'
import settings from '../img/settings.svg'
import logo from '../img/logo.png'
import avatar from '../img/avatar.jpg'

const LeftMenu:FC = () => {
    return (
        <div className={classes.LeftMenu}>
            <div className={classes.logo_block}>
                <img className={classes.logo_img} src={logo}/>
            </div>
            <div className={classes.options_block}>
                <div>
                    <img className={classes.svg_icon} src={friends}/>
                </div>
                <div>
                    <img className={classes.svg_icon} src={chats}/>
                </div>
            </div>
            <div className={classes.profile_block}>
                <div>
                    <img className={classes.avatar} src={avatar} />
                </div>
                <div>
                    <img className={classes.svg_icon} src={settings}/>
                </div>
            </div>
        </div>
    )
}

export default LeftMenu