import React, { FC, useEffect } from 'react';
import AppRouter from './components/AppRouter';
import './App.css'
import { authCheck } from './http/user_api';
import { useTypedSelector } from './hooks/useTypedSelector';
import jwtDecode from 'jwt-decode'
import { useDispatch } from 'react-redux';
import { UserDataActionsEnum } from './store/reducers/userData/types';
import { IsAuthEnum } from './store/reducers/auth/types';

const  App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    authCheck().then(() => {

      const token: any = localStorage.getItem('accessToken');
      const data: any = jwtDecode(token);
      dispatch({type: IsAuthEnum.SET_ISAUTH, payload: true})
      dispatch({type: UserDataActionsEnum.SET_USERDATA, payload: data.userDto})
      console.log(data.userDto)
    })
  }, [])
  return (
    <div className='App'>
      <AppRouter/>
    </div>
  );
}

export default App;
