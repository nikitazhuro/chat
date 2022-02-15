import { $authHost, $host } from ".";

export const registration = async (phoneNumber: string, password: string)  => {
    const {data} = await $host.post('api/user/registration', {phoneNumber, password})
    return data
}