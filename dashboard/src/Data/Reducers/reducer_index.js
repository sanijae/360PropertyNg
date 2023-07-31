import { combineReducers } from "redux"
import { AdminReducer } from "./AdminReducer"
import { BlogReducer } from "./BlogReducer"
import { NoteReducer } from "./NoteReducer"
import { PostReducer } from "./PostReducer"
import { UserReducer } from "./UserReducer"

export default combineReducers({
    posts: PostReducer,
    users: UserReducer,
    admins:AdminReducer,
    notes:NoteReducer,
    blogs:BlogReducer
}) 