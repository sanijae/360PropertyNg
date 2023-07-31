import { CREATE_BLOG_POST, DELETE_BLOG_POST, FETCH_ALL_BLOG_POST, FETCH_BLOG_POST } from "../types"

export const BlogReducer =(state=[],action)=>{
    switch (action.type) {
        case FETCH_ALL_BLOG_POST:
            return{...state,notes:action.payload}
        case FETCH_BLOG_POST:
            return{...state,note:action.payload}
        case CREATE_BLOG_POST:
            return{...state,note:action.payload}
        case DELETE_BLOG_POST:
            return{...state,note:action.payload}
        default:
            return state;
    }
}