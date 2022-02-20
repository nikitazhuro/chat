import React, { FC, useEffect, useState } from 'react';
import AppRouter from './components/AppRouter';
import './App.css'
import { authCheck } from './http/user_api';
import { useDispatch } from 'react-redux';
import { UserDataActionsEnum } from './store/reducers/userData/types';
import { IsAuthEnum } from './store/reducers/auth/types';
import Chat from './pages/MainPage';


const  App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const dispatch = useDispatch()


  useEffect(() => {
    authCheck().then((data) => {
      dispatch({type: IsAuthEnum.SET_ISAUTH, payload: true})
      dispatch({type: UserDataActionsEnum.SET_USERDATA, payload: data})
    }).finally(() => setIsLoading(false))
  }, [])
  if(isLoading){
    return <Chat/>
}
  return (
    <div className='App'>
      <AppRouter/>
    </div>
  );
}

export default App;
