import { ActiveMenu, ActiveModalEnum, IActiveMenu } from "./types"


const initialState :IActiveMenu = {
    friends: false,
    chats: false,
    settings: false
}

export default function activeMenuReducer (state = initialState, action: ActiveMenu) :IActiveMenu {
    switch (action.type){
        case ActiveModalEnum.SET_ACTIVE_FRIENDS: 
        return {...state, friends: action.payload, settings: false, chats: false}
        case ActiveModalEnum.SET_ACTIVE_CHATS: 
        return {...state, chats: action.payload, settings: false, friends: false}
        case ActiveModalEnum.SET_ACTIVE_SETTINGS: 
        return {...state, settings: action.payload, chats: false, friends: false}
        case ActiveModalEnum.SET_UNACTIVE: 
        return {...state, settings: action.payload, chats: action.payload, friends: action.payload}
        default: 
        return state
    }
}


