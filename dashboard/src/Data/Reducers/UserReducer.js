import { CREATE_USER, DELETE_USER, FETCH_ALL_USERS, FETCH_USER, UPDATE_USER } from "../types";

export const UserReducer =(state=[],action)=>{
    switch (action.type) {
        case FETCH_ALL_USERS:            
            return {...state,users:action.payload}
        case FETCH_USER:
            return {...state,user:action.payload}        
        case DELETE_USER:
            return {...state,user:action.payload}
        case UPDATE_USER:
            return {...state,user:action.payload}
        case CREATE_USER:            
        return {...state,user:action.payload}
        default:
            return state
    }
}