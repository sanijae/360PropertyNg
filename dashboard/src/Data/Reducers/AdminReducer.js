import { CREATE_ADMIN, DELETE_ADMIN, ERROR, FETCH_ADMIN, FETCH_ALL_ADMINS, LOGIN_ADMIN, LOG_OUT, UPDATE_ADMIN } from "../types";

export const AdminReducer =(state=[],action)=>{
    switch (action.type) {  
        case FETCH_ALL_ADMINS:            
            return {admins:action.payload};
        case FETCH_ADMIN:
            return {...state,admin: action.payload}
        case ERROR:
            return {...state,errors: action.payload}
        case CREATE_ADMIN:
            return {admin:action.payload}
        case LOGIN_ADMIN:
            localStorage.setItem('admin',JSON.stringify({...action.payload}))
            return {...state,admin:action.payload}
        case UPDATE_ADMIN:
            return {...state,admin:action.payload}
        case DELETE_ADMIN:
            return {...state,admin:action.payload}
        case LOG_OUT:
            localStorage.removeItem('admin')
            return {...state,admin:action.payload}
        default:
            return state;
    }
}  