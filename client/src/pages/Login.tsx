import React, { FC, useState } from "react";
import MyInput from "../components/UI/input/MyInput";
import { registration } from "../http/user_api";
import classes from '../styles/Login.module.css'

interface IState {
    login: string,
    password: string
}

const Login:FC = () => {
    const [state, setState] = useState<IState>({
        login: '',
        password: ''
    })
    const reg = async () => {
        await registration(state)
    }
    return (
        <div className={classes.Login}>
            <div className={classes.reg_form}>
                <MyInput
                value={state.login}
                onChange={(e) => setState({...state, login: e.target.value})} 
                type="text" />
                <MyInput
                value={state.password}
                onChange={(e) => setState({...state, password: e.target.value})}
                type="password" />
                <button onClick={reg}>Login</button>
            </div>
        </div>
    )
}

export default Login;