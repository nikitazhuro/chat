interface IUserContacts {
    phoneNumber: string,
    avatar: string [],
    firstName: string,
    secondName: string
}

interface IUserRoomUser{
    phoneNumber: string,
    avatar: string,
    userName: string
}

interface IUserRoom {
    _id : string,
    messages: [],
    users: IUserRoomUser []
}

export interface IUserData {
    avatar: string,
    phoneNumber: string,
    firstName: string,
    secondName: string,
    personalInfo: string,
    contacts: IUserContacts [],
    rooms: IUserRoom []
}

export enum UserDataActionsEnum {
    SET_USERDATA ='SET_USERDATA',
}

interface IPayload {
    id: string,
    avatar: string,
    phoneNumber: string,
    firstName: string,
    secondName: string,
    personalInfo: string,
    contacts: [],
    rooms: any []
}
interface SetUserDataAction {
    type: UserDataActionsEnum.SET_USERDATA
    payload: IPayload;
}

export type ActiveMenu = SetUserDataAction