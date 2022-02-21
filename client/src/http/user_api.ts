import { $authHost, $host } from ".";

export const registration = async (phoneNumber: string, password: string)  => {
    const {data} = await $host.post('api/user/registration', {phoneNumber, password})
    return data
}

export const login = async (phoneNumber: string, password: string)  => {
    const {data} = await $host.post('api/user/login', {phoneNumber, password})
    localStorage.setItem('accessToken', `${data.accessToken}`)
    return data
}

export const authCheck = async () => {
    const {data} = await $authHost.get('api/user/authCheck')
    return data
}

export const logout = async () => {
    await $host.get('api/user/logout');
    localStorage.removeItem('accessToken');
}

export const updateUser = async (formData: object) => {
    const {data} = await $authHost.post('/api/user/updateUser', formData)
    return data
}

export const findAUser = async (phoneNumber: string) => {
    const {data} = await $authHost.post('/api/user/findAUser', {phoneNumber})
    return data;
}

export const addContact = async (myPhoneNumber: string, contactPhoneNumber: string) => {
    await $authHost.post('/api/user/addContact', {myPhoneNumber, contactPhoneNumber})
}