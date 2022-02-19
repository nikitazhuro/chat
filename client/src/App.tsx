import React, { FC, useEffect } from 'react';
import AppRouter from './components/AppRouter';
import './App.css'
import { authCheck } from './http/user_api';
import { useDispatch } from 'react-redux';
import { UserDataActionsEnum } from './store/reducers/userData/types';
import { IsAuthEnum } from './store/reducers/auth/types';

const  App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    authCheck().then((data) => {
      dispatch({type: IsAuthEnum.SET_ISAUTH, payload: true})
      dispatch({type: UserDataActionsEnum.SET_USERDATA, payload: data})
    })
  }, [])
  return (
    <div className='App'>
      <AppRouter/>
    </div>
  );
}

export default App;
