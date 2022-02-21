import { $authHost } from ".";

export const createRoom = async (myPhoneNumber: string, contactPhoneNumber: string)  => {
    const {data} = await $authHost.post('api/room/createRoom', {myPhoneNumber, contactPhoneNumber})
    return data
}

export const getRoom = async (roomId: string)  => {
    const {data} = await $authHost.post('api/room/getRoom', {roomId})
    return data
}