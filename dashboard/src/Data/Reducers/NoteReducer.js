import { DELETE_NOTE, FETCH_ALL_NOTE, FETCH_NOTE, UPDATE_NOTE } from "../types";

export const NoteReducer =(state=[],action)=>{
    switch (action.type) {
        case FETCH_ALL_NOTE:
            return{...state,notes:action.payload}
        case FETCH_NOTE:
            return{...state,note:action.payload}
        case UPDATE_NOTE:
            return{...state,note:action.payload}
        case DELETE_NOTE:
            return{...state,note:action.payload}
        default:
            return state;
    }
}