interface StateType  { 
    flag: boolean,
    content:string,
}
   
interface ActionsParamType  {

}
 const login:ModelType<StateType,ActionsParamType>={
    state:{
        flag:true,
        content:''
    },
    actions:{
        
    }
}
export default login;