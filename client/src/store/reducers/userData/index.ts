import { IUserData, ActiveMenu, UserDataActionsEnum } from "./types";

const initialState: IUserData = {
    userName: '',
    avatar: '',
    phoneNumber: '',
    firstName: '',
    secondName: '',
    personalInfo: ''
}

export default function userReducer (state=initialState, action: ActiveMenu): IUserData {
    switch (action.type){
        case UserDataActionsEnum.SET_USERDATA:
            return {...state,
                userName: action.payload.userName, 
                avatar: action.payload.avatar[0], 
                phoneNumber: action.payload.phoneNumber,
                firstName: action.payload.firstName,
                secondName: action.payload.secondName,
                personalInfo: action.payload.personalInfo
            }
        case UserDataActionsEnum.GET_USERDATA: 
            return state
        default :
            return state
    }
}