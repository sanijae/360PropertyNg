import * as api from '../../API/Axios'
import { CREATE_ADMIN, DELETE_ADMIN, ERROR, FETCH_ADMIN, FETCH_ALL_ADMINS, LOGIN_ADMIN, UPDATE_ADMIN } from '../types';

export const registerAdmin =(info)=>async(dispatch)=>{
    try {
        const {data} = await api.AddAdmin({...info})
        if(data.error){
            dispatch({type: ERROR,payload:data.error})
            console.log(data.error);
        }else{
         dispatch({type: CREATE_ADMIN,payload:data})
         console.log(data);
        } 
    } catch (error) {
        console.log(error.message);
    } 
}
export const adminLogin =(info)=>async(dispatch)=>{
    try {
        const {data} = await api.loginAdmin(info)
        if(data.error){
            dispatch({type: ERROR,payload:data.error})
        }else{
         dispatch({type: LOGIN_ADMIN,payload:data})
         window.location.pathname ='/'
         console.log(data);
        }
    } catch (error) {
        console.log(error.message);
    }
}
export const getAllAdmin =()=>async(dispatch)=>{
    try {
        const {data} = await api.getAdmins()
        if(data.error){
            dispatch({type: ERROR,payload:data.error})
        }else{
         dispatch({type: FETCH_ALL_ADMINS,payload:data})
        }
    } catch (error) {
        console.log(error.message);
    }
}
export const getAdmin =(id)=>async(dispatch)=>{
    try {
        const {data} = await api.getAdmin(id)
        if(data.error){
            dispatch({type: ERROR,payload:data.error})
        }else{
         dispatch({type: FETCH_ADMIN,payload:data})
        }
    } catch (error) {
        console.log(error.message);
    }
}
export const adminUpdate =(id,info)=>async(dispatch)=>{
    try {
        const {data} = await api.updateAdmin(id,info)
        if(data.error){
            dispatch({type: ERROR,payload:data.error})
        }else{
         dispatch({type: UPDATE_ADMIN,payload:data})
        }
        console.log(data);
    } catch (error) {
        console.log(error.message);
    }
}
export const adminDelete =(id)=>async(dispatch)=>{
    try {
        const {data} = await api.deleteAdmin(id)
        if(data.error){
            dispatch({type: ERROR,payload:data.error})
        }else{
         dispatch({type: DELETE_ADMIN,payload:data})
        }
    } catch (error) {
        console.log(error.message);
    }
}