
export interface IIsAuth {
    isAuth: boolean
}

export enum IsAuthEnum {
    SET_ISAUTH = 'SET_ISAUTH',
    GET_ISAUTH = 'GET_ISAUTH'
}


interface SetIsAuthAction {
    type: IsAuthEnum.SET_ISAUTH,
    payload: boolean
}

interface GetIsAuthAction {
    type: IsAuthEnum.GET_ISAUTH,
    payload: boolean
}

export type IsAuth = SetIsAuthAction | GetIsAuthAction
