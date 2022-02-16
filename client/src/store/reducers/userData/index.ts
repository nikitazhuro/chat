import { IUserData, ActiveMenu, UserDataActionsEnum } from "./types";

const initialState: IUserData = {
    id: '',
    userName: '',
    avatar: '',
    phoneNumber: ''
}

export default function userReducer (state=initialState, action: ActiveMenu): IUserData {
    switch (action.type){
        case UserDataActionsEnum.SET_USERDATA:
            return {...state, id: action.payload.id, userName: action.payload.userName, avatar: action.payload.avatar, phoneNumber: action.payload.phoneNumber}
        case UserDataActionsEnum.GET_USERDATA: 
            return state
        default :
            return state
    }
}