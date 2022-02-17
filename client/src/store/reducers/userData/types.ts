export interface IUserData {
    userName?: string,
    avatar?: string,
    phoneNumber?: string,
    firstName?: string,
    secondName?: string,
    personalInfo?: string
}

export enum UserDataActionsEnum {
    SET_USERDATA ='SET_USERDATA',
    GET_USERDATA = 'GET_USERDATA'
}


interface IPayload {
    id: string,
    userName: string,
    avatar: string,
    phoneNumber: string,
    firstName: string,
    secondName: string,
    personalInfo: string
}

interface GetUserDataAction {
    type: UserDataActionsEnum.GET_USERDATA
    payload: IPayload;
}
interface SetUserDataAction {
    type: UserDataActionsEnum.SET_USERDATA
    payload: IPayload;
}

export type ActiveMenu = GetUserDataAction | SetUserDataAction