import * as api from '../../API/Axios'
import { CREATE_BLOG_POST, DELETE_BLOG_POST, ERROR, FETCH_ALL_BLOG_POST, FETCH_BLOG_POST } from '../types';

export const createBlogPost =(info)=>async(dispatch)=>{
    try {
        const {data} = await api.createBlogPost(info)
        if(data.error){
            dispatch({type: ERROR,payload:data.error})
            console.log(data.error);
        }else{
         dispatch({type: CREATE_BLOG_POST,payload:data})
         console.log(data);
        }
    } catch (error) {
        console.log(error.message);
    } 
}
export const getAllBlogPost =()=>async(dispatch)=>{
    try {
        const {data} = await api.getBlogPosts()
        if(data.error){
            dispatch({type: ERROR,payload:data.error})
        }else{
         dispatch({type: FETCH_ALL_BLOG_POST,payload:data})
        }
    } catch (error) {
        console.log(error.message);
    }
}
export const getBlogPost =(id)=>async(dispatch)=>{
    try {
        const {data} = await api.getBlogPost(id)
        if(data.error){
            dispatch({type: ERROR,payload:data.error})
        }else{
         dispatch({type: FETCH_BLOG_POST,payload:data})
        }
    } catch (error) {
        console.log(error.message);
    }
}
export const deleteBlogPost =(id)=>async(dispatch)=>{
    try {
        const {data} = await api.deleteBlogPost(id)
        if(data.error){
            dispatch({type: ERROR,payload:data.error})
        }else{
         dispatch({type: DELETE_BLOG_POST,payload:data})
        }
    } catch (error) {
        console.log(error.message);
    }
}