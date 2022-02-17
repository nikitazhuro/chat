import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { logout, updateUser } from "../../../http/user_api";
import { IsAuthEnum } from "../../../store/reducers/auth/types";
import MyButton from "../../UI/button/MyButton";
import MyInput from "../../UI/input/MyInput";
import classes from './ModalActiveSettings.module.css'



const ModalActiveSettings = () => {
    const {avatar, phoneNumber, firstName, secondName, personalInfo} = useTypedSelector(state => state.userReducer);
    const dispatch = useDispatch()
    const router = useNavigate()
    const [imgFile, setImgFile] = useState('');
    const [changeData, setChangeData] = useState({
        firstName: `${firstName}`,
        secondName: `${secondName}`,
        personalInfo: `${personalInfo}`
    })
    const changeAvatar = async () => {
        const formData = new FormData();
        formData.append('phoneNumber', `${phoneNumber}`)
        formData.append('firstName', `${changeData.firstName}`)
        formData.append('secondName', `${changeData.secondName}`)
        formData.append('personalInfo', `${changeData.personalInfo}`)
        formData.append('img', imgFile)
        await updateUser(formData).then(() => {
            alert('Данные обновлены')
        })
    }
    const exit = async () => {
        await logout();
        dispatch({type: IsAuthEnum.SET_ISAUTH, payload: false})
        router('/login')
    }
    return(
        <div className={classes.ModalSettings}>
            <div className={classes.ModalSettings_Content}>
                <div className={classes.AvatarSettings}>
                    <h1>Настройки профиля</h1>
                    <label><input
                    onChange={(e: any) => setImgFile(e.target.files[0])}
                    type='file' />
                    <img 
                    src={`http://localhost:4000/` + avatar}
                    />
                    </label>
                </div>
                <div className={classes.InputsSettings}>
                    <div className={classes.Inputs}>
                        <MyInput
                        value={changeData.firstName} 
                        type='text' 
                        onChange={(e) => setChangeData({...changeData, firstName: e.target.value})} 
                        placeholder='firstname'
                        />
                        <MyInput 
                        value={changeData.secondName}
                        type='text' 
                        onChange={(e) => setChangeData({...changeData, secondName: e.target.value})} 
                        placeholder='secondName'
                        />
                        <MyInput 
                        value={changeData.personalInfo}
                        type='text' 
                        onChange={(e) => setChangeData({...changeData, personalInfo: e.target.value})} 
                        placeholder='about you'
                        />
                    </div>
                </div>
                <div className={classes.ButtonsSettings}>
                    <div className={classes.Buttons}>
                        <MyButton onClick={exit}>Exit</MyButton>
                        <MyButton onClick={changeAvatar}>Update</MyButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalActiveSettings;