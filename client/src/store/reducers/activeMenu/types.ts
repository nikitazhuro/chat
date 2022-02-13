
export interface IActiveMenu {
    friends?: boolean,
    chats?: boolean,
    settings?: boolean
}

export enum ActiveModalEnum {
    SET_ACTIVE_FRIENDS = "SET_ACTIVE_FRIENDS",
    SET_ACTIVE_CHATS = "SET_ACTIVE_CHATS",
    SET_ACTIVE_SETTINGS = "SET_ACTIVE_SETTINGS",
    SET_UNACTIVE = "SET_UNACTIVE"
}

interface SetActiveFriendsAction {
    type: ActiveModalEnum.SET_ACTIVE_FRIENDS,
    payload: boolean
}
interface SetActiveChatsAction {
    type: ActiveModalEnum.SET_ACTIVE_CHATS,
    payload: boolean
}
interface SetActiveSettingsAction {
    type: ActiveModalEnum.SET_ACTIVE_SETTINGS,
    payload: boolean
}
interface SetUnactive {
    type: ActiveModalEnum.SET_UNACTIVE,
    payload: boolean
}

export type ActiveMenu = SetActiveFriendsAction | SetActiveChatsAction | SetActiveSettingsAction | SetUnactive