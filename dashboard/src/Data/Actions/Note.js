import * as api from '../../API/Axios'
import { ERROR, FETCH_ALL_NOTE } from '../types';


export const getAllNotes =()=>async(dispatch)=>{
    try {
        const {data} = await api.getNotes()
        if(data.error){
            dispatch({type:ERROR,payload:data.error})
        }else{
            dispatch({type:FETCH_ALL_NOTE,payload:data})
        }
    } catch (error) {
        console.log(error.message);
    }
}
export const getNote =()=>async(dispatch)=>{
    try {
        const {data} = await api.getNote()
        if(data.error){
            dispatch({type:ERROR,payload:data.error})
        }else{
            dispatch({type:FETCH_ALL_NOTE,payload:data})
        }
    } catch (error) {
        console.log(error.message);
    }
}
export const updateNote =()=>async(dispatch)=>{
    try {
        const {data} = await api.updateNote()
        if(data.error){
            dispatch({type:ERROR,payload:data.error})
        }else{
            dispatch({type:FETCH_ALL_NOTE,payload:data})
        }
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteNote =()=>async(dispatch)=>{
    try {
        const {data} = await api.deleteNote()
        if(data.error){
            dispatch({type:ERROR,payload:data.error})
        }else{
            dispatch({type:FETCH_ALL_NOTE,payload:data})
        }
    } catch (error) {
        console.log(error.message);
    }
}