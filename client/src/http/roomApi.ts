import { $authHost, $host } from ".";

export const createRoom = async (myPhoneNumber: any, contactPhoneNumber: string)  => {
    const {data} = await $authHost.post('api/room/createRoom', {myPhoneNumber, contactPhoneNumber})
    return data
}

export const getRoom = async (roomId: any)  => {
    const {data} = await $authHost.post('api/room/getRoom', {roomId})
    return data
}