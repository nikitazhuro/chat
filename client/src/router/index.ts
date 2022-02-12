import React from "react";
import Chat from "../pages/MainPage";
import Login from "../pages/Login";
import Registration from "../pages/Registration";

export interface IRouter {
    path: string,
    element: React.ComponentType,
}
export enum RouterList {
    LOGIN = '/login',
    REGISTRATION = '/registration',
    CHAT = '/'
}

export const publicRouter: IRouter[] = [
    {path: RouterList.LOGIN, element: Login},
    {path: RouterList.REGISTRATION, element: Registration},
    {path: '*', element: Login}
]

export const privateRouter: IRouter[] = [
    {path: RouterList.CHAT, element: Chat},
    {path: '*', element: Chat}
]