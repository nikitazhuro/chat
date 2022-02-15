import axios,{ AxiosRequestConfig } from "axios";

type IConfig = AxiosRequestConfig & {
    headers?: any 
}

const $host = axios.create({
    baseURL: "http://localhost:4000/"
})

const $authHost = axios.create({
    baseURL: 'http://localhost:6000/'
})

$authHost.interceptors.request.use((config: IConfig) => {
config.headers.Autorization = `Bearer ${localStorage.getItem('accessToken')}`
return config
})

export {
    $host,
    $authHost
}