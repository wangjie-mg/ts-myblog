import React from 'react'
import { Route } from 'react-router-dom';
// import loadable from "@loadable/component"; 
import Login from '../pages/login';
import Main from '../pages/main';
// const Login = loadable(()=>import('../pages/login/index'));
// const Main = loadable(()=>import('../pages/main/index'));

export interface routetype{
    path:string,
    component:React.FC,
}
export const routes=[{
    path:'/login',
    component:Login,
},{
    path:'/',
    component:Main,
}]


export function RouteWithSubRoutes(route:routetype){
    return(
        <Route 
            path = {route.path}
            render = { (props:any) =><route.component {...props} {...route}/>}
        />
    );
}