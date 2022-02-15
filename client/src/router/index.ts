import React from "react";
import Chat from "../pages/MainPage";
import Login from "../pages/Login";

export interface IRouter {
    path: string,
    element: React.ComponentType,
}
export enum RouterList {
    LOGIN = '/login',
    CHAT = '/'
}

export const publicRouter: IRouter[] = [
    {path: RouterList.LOGIN, element: Login},
    {path: '*', element: Login}
]

export const privateRouter: IRouter[] = [
    {path: RouterList.CHAT, element: Chat},
    {path: '*', element: Chat}
]