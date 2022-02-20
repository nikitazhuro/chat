export interface IShowModal {
    showModal?: boolean,
}

export enum ShowModalActionsEnum {
    SET_SHOWMODAL ='SET_SHOWMODAL',
}

interface SetShowModalAction {
    type: ShowModalActionsEnum.SET_SHOWMODAL
    payload: boolean;
}

export type ShowModal = SetShowModalAction