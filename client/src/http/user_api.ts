import { $authHost, $host } from ".";


interface IData {
    login: string,
    password: string
}

interface IRegistration {
    url: URL,
    data: IData
}

export const registration  = async ({login, password}: IData)  => {
    const {data} = await $host.post<IRegistration> ('', {login, password})
    return data
}