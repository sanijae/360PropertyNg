import * as api from '../../API/Axios'
import { CREATE_POST, FETCH_ALL_POST, DELETE_POST,FETCH_POST, UPDATE_POST } from '../types';

export const create_new_post =(datas)=>async(dispatch)=>{
    try {
        const {data} = await api.createPost(datas)
        dispatch({type:CREATE_POST,payload: data})
    } catch (error) {
        console.log(error.message);
    } 
}
export const fetch_posts =()=>async(dispatch)=>{
    try {
        const {data} = await api.getPosts()
        dispatch({type:FETCH_ALL_POST,payload:data})       
    } catch (error) {
        console.log(error.message);
    }
}

export const fetch_post_by_id =(id)=>async(dispatch)=>{
    try {
        const {data} = await api.getPost(id)
        dispatch({type:FETCH_POST,payload: data})
    } catch (error) {
        console.log(error.message);
    }
}
export const delete_post_by_id =(id)=>async(dispatch)=>{
    try {
        const {data} = await api.deletePost(id)
        dispatch({type:DELETE_POST,payload: data})
    } catch (error) {
        console.log(error.message);
    }
}
export const update_post_by_id =(id,datas)=>async(dispatch)=>{
    try {
        const {data} = await api.updatePost(id,datas)
        dispatch({type:UPDATE_POST,payload: data})
    } catch (error) {
        console.log(error.message);
    }
}