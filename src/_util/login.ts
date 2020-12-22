/**
 * 是否已经登录或者token 超时
 * 
 */
import cookie from "react-cookie";
const islogin= ():Boolean=>{
    
    if(cookie.load('token')){
        return  false;
    }

    const lifeTime = JSON.parse(window.localStorage.getItem('TOKEN') || '').lifeTime * 1000;
    const nowTime = (new Date()).getTime()
    if(nowTime > lifeTime) {
        return false;
    }
    return true;
}
export default islogin;