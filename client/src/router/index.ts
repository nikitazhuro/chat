import React from "react";
import Chat from "../pages/MainPage";
import Login from "../pages/Login";

interface IRouter {
    path: string,
    element: React.ComponentType,
}
enum RouterList {
    LOGIN = '/login',
    CHAT = '/chat',
    CHAT_ID = '/chat/:roomId'
}

export const publicRouter: IRouter[] = [
    {path: RouterList.LOGIN, element: Login},
    {path: '*',element: Login}
]

export const privateRouter: IRouter[] = [
    {path: RouterList.CHAT, element: Chat},
    {path: RouterList.CHAT_ID, element: Chat},
    {path: '*', element: Chat}
]