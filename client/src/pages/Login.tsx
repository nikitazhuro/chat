import React, { FC, useState } from "react";
import MyInput from "../components/UI/input/MyInput";
import { login, registration } from "../http/user_api";
import classes from '../styles/Login.module.css'
import logo from '../img/4.png'
import MyButton from "../components/UI/button/MyButton";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { IsAuthEnum } from "../store/reducers/auth/types";

interface ILogin {
    phoneNumber: string,
    password: string
}

const Login:FC = () => {
    const [state, setState] = useState<ILogin>({
        phoneNumber: '',
        password: ''
    });

    const router = useNavigate();
    const dispatch = useDispatch();

    const [activeButton, setActiveButton] = useState<string>('');

    const reg = async () => {
        await registration(state.phoneNumber, state.password).then(() => {
            setActiveButton('login')
        })
    }

    const log = async () => {
        await login(state.phoneNumber, state.password).then(() => {
            dispatch({type: IsAuthEnum.SET_ISAUTH, payload: true})
            router('/chat')
            window.location.reload()
        })
    }

    return (
        <div className={classes.Login}>
            <div >
                <div className={classes.logo_block}>
                    <div className={classes.logo_elems}>
                        <div className={classes.logo_elemsWrapper}>
                            <img className={classes.logo} src={logo}/>
                            <div className={classes.elem}></div>
                        </div>
                    </div>
                    <div className={classes.title}>
                        <h1>HiBro</h1>
                    </div>
                </div>
                <div className={classes.reg_form}>
                    {activeButton == '' && 
                    <div className={classes.reg_form_buttons}>
                        <MyButton style={{marginRight: '20px'}} className={classes.elemBtn} onClick={() => setActiveButton('login')}>??????????</MyButton>
                        <MyButton className={classes.elemBtn} onClick={() => setActiveButton('registration')}>??????????????????????</MyButton>
                    </div>
                    }
                    {activeButton == 'login' && 
                    <div className={classes.reg_form_elems}>
                        <MyInput
                        placeholder="?????????????? ?????????? ????????????????"
                        value={state.phoneNumber}
                        onChange={(e) => setState({...state, phoneNumber: e.target.value})} 
                        type="text" />
                        <MyInput
                        placeholder="?????????????? ????????????"
                        value={state.password}
                        onChange={(e) => setState({...state, password: e.target.value})} 
                        type="password" />
                        <MyButton className={classes.elemBtn} onClick={log}>??????????</MyButton>
                        <div className={classes.reg_form_elemSpan}>
                            <span onClick={() => setActiveButton('registration')}>?????? ??????????????a? ??????????????????????????????????</span>
                        </div>   
                    </div> 
                    }
                    {activeButton == 'registration' && 
                    <div className={classes.reg_form_elems}>
                        <MyInput
                        placeholder="?????????????? ?????????? ????????????????"
                        value={state.phoneNumber}
                        onChange={(e) => setState({...state, phoneNumber: e.target.value})} 
                        type="text" />
                        <MyInput
                        placeholder="?????????????? ????????????"
                        value={state.password}
                        onChange={(e) => setState({...state, password: e.target.value})} 
                        type="password" />
                        <MyButton className={classes.elemBtn} onClick={reg}>????????????????????????????????????</MyButton>
                        <div className={classes.reg_form_elemSpan}>
                            <span onClick={() => setActiveButton('login')}>???????? ??????????????? ??????????????</span>    
                        </div>  
                    </div> 
                    }  
                </div>
            </div>
        </div>
    )
}

export default Login;