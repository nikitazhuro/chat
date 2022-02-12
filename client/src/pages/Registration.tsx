import React, { FC, useState } from "react";
import { registration } from "../http/user_api";
import classes from '../styles/Registration.module.css'

interface IState {
    login: string,
    password: string
}

const Registration:FC = () => {
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
                <input
                value={state.login}
                onChange={(e) => setState({...state, login: e.target.value})} 
                type="text" />
                <input 
                value={state.password}
                onChange={(e) => setState({...state, password: e.target.value})}
                type="password" />
                <button onClick={reg}>Зарегистрироваться</button>
            </div>
        </div>
    )
}

export default Registration;