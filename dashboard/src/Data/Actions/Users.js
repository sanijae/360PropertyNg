import * as api from '../../API/Axios'
import { DELETE_USER, FETCH_ALL_USERS, FETCH_USER, UPDATE_USER } from '../types';

export const fetch_users =()=>async(dispatch)=>{
    try {
        const {data} = await api.getUsers()
        dispatch({type:FETCH_ALL_USERS,payload:data})
    } catch (error) {
        console.log(error.message);
    }
}
export const fetch_user_by_id =(id)=>async(dispatch)=>{
    try {
        const {data} = await api.getUser(id)
        dispatch({type:FETCH_USER,payload:data})
    } catch (error) {
        console.log(error.message);
    }
}
export const delete_user_by_id =(id)=>async(dispatch)=>{
    try {
        const {data} = await api.deleteUser(id)
        dispatch({type:DELETE_USER,payload:data})
    } catch (error) {
        console.log(error.message);
    }
}
export const update_user =(id)=>async(dispatch)=>{
    try {
        const {data} = await api.updateUser(id)
        dispatch({type:UPDATE_USER,payload:data})
    } catch (error) {
        console.log(error.message);
    }
}