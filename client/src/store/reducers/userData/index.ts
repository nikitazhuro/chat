import { IUserData, ActiveMenu, UserDataActionsEnum } from "./types";

const initialState: IUserData = {
    avatar: '',
    phoneNumber: '',
    firstName: '',
    secondName: '',
    personalInfo: '',
    contacts: [],
    rooms:  []
}

export default function userReducer (state: IUserData = initialState, action: ActiveMenu): IUserData {
    switch (action.type){
        case UserDataActionsEnum.SET_USERDATA:
            return {...state,
                avatar: action.payload.avatar[0], 
                phoneNumber: action.payload.phoneNumber,
                firstName: action.payload.firstName,
                secondName: action.payload.secondName,
                personalInfo: action.payload.personalInfo,
                contacts: action.payload.contacts,
                rooms: action.payload.rooms
            }
        default :
            return state
    }
}