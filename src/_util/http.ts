import Login from '../pages/login';
import login from './login';
import { API_ROOT } from './proxy';
import islogin from "./login";
import axios,{ AxiosRequestConfig, AxiosResponse }from  "axios";

export const http = axios.create({
    baseURL:API_ROOT,
    headers:{}
})

http.interceptors.request.use((config:AxiosRequestConfig)=>{
    config.headers.Authorizatio = 
})