import axios,{ AxiosRequestConfig } from "axios";

type IConfig = AxiosRequestConfig & {
    headers?: any 
}

const $host = axios.create({
    baseURL: ''
})

const $authHost = axios.create({
    baseURL: ''
})

$authHost.interceptors.request.use((config: IConfig) => {
config.headers.Autorization = `Bearer ${localStorage.getItem('accessToken')}`
return config
})

export {
    $host,
    $authHost
}