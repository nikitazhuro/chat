import React, { FC, useState } from "react";
import MyInput from "../components/UI/input/MyInput";
import { registration } from "../http/user_api";
import classes from '../styles/Login.module.css'
import logo from '../img/4.png'
import MyButton from "../components/UI/button/MyButton";

interface IState {
    login: string,
    password: string
}
interface IActivateButon {
    login?: string,
    registration?: string
}

const Login:FC = () => {
    const [state, setState] = useState<IState>({
        login: '',
        password: ''
    })
    const [activeButton, setActiveButton] = useState('')
    const reg = async () => {
        await registration(state)
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
                        <MyButton style={{marginRight: '20px'}} className={classes.elemBtn} onClick={() => setActiveButton('login')}>Войти</MyButton>
                        <MyButton className={classes.elemBtn} onClick={() => setActiveButton('registration')}>Регистрация</MyButton>
                    </div>
                    }
                    {activeButton == 'login' && <div className={classes.reg_form_elems}>
                        <MyInput
                        placeholder="Введите номер телефона"
                        value={state.login}
                        onChange={(e) => setState({...state, login: e.target.value})} 
                        type="text" />
                        <MyButton className={classes.elemBtn} onClick={reg}>Войти</MyButton>
                        <div className={classes.reg_form_elemSpan}>
                            <span onClick={() => setActiveButton('registration')}>Нет аккаунтa? Зарегистрируйтесь</span>
                        </div>   
                    </div> }
                    {activeButton == 'registration' && <div className={classes.reg_form_elems}>
                        <MyInput
                        placeholder="Введите номер телефона"
                        value={state.login}
                        onChange={(e) => setState({...state, login: e.target.value})} 
                        type="text" />
                        <MyButton className={classes.elemBtn} onClick={reg}>Зарегистрироваться</MyButton>
                        <div className={classes.reg_form_elemSpan}>
                            <span onClick={() => setActiveButton('login')}>Есть аккаунт? Войдите</span>    
                        </div>  
                    </div> }  
                </div>
            </div>
        </div>
    )
}

export default Login;