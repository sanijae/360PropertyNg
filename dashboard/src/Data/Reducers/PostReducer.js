import { FETCH_ALL_POST,FETCH_POST,CREATE_POST,DELETE_POST } from "../types";

export const PostReducer =(state=[],action)=>{
    switch (action.type) {
        case CREATE_POST:
            return {...state,post:action.payload}
        case FETCH_ALL_POST:
            return {...state,posts:action.payload}
        case FETCH_POST:
            return {...state,post:action.payload}   
        case DELETE_POST:
            return {...state,post:action.payload} 
        default:
            return state
    }
}
