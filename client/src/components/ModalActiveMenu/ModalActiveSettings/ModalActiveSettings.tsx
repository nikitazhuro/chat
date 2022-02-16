import React, { useState } from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { updateUser } from "../../../http/user_api";
import classes from './ModalActiveSettings.module.css'



const ModalActiveSettings = () => {
    const {avatar, phoneNumber} = useTypedSelector(state => state.userReducer);
    const [imgFile, setImgFile] = useState('');
    const changeAvatar = async () => {
        console.log(phoneNumber)
        const formData = new FormData();
        formData.append('phoneNumber', `${phoneNumber}`)
        formData.append('img', imgFile)
        await updateUser(formData)
    }
    return(
        <div className={classes.ModalSettings}>
            <div className={classes.ModalSettings_Content}>
                <div className={classes.AvatarSettings}>
                    <label><input
                    onChange={(e: any) => setImgFile(e.target.files[0])}
                    type='file' />
                    <img 
                    src={avatar}
                    />
                    </label>
                    <button onClick={changeAvatar}>wadawdwad</button>
                </div>
            </div>
        </div>
    )
}

export default ModalActiveSettings;