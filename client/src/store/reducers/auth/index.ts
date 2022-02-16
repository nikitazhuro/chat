import { IIsAuth, IsAuth, IsAuthEnum } from "./types"

const initialState:IIsAuth = {
    isAuth: false
}

export default function authUser (state = initialState, action: IsAuth) : IIsAuth{
    switch (action.type) {
        case IsAuthEnum.SET_ISAUTH:
        return {...state, isAuth: action.payload}
        case IsAuthEnum.GET_ISAUTH:
        return state
        default :
        return state
    }
}