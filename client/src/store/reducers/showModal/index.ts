import { IShowModal, ShowModal, ShowModalActionsEnum } from "./types";

const initialState: IShowModal = {
    showModal: false
}

export default function showModalReducer (state=initialState, action: ShowModal): IShowModal {
    switch (action.type){
        case ShowModalActionsEnum.SET_SHOWMODAL:
            return {...state, showModal: action.payload, }
        default :
            return state
    }
}