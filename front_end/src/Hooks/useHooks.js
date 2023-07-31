import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate,useLocation } from "react-router-dom";
import * as api from "../Api/ApiCalls";

const AuthContex = createContext()
export const useAuth =()=>{
    return useContext(AuthContex)
}
export function useQuery(){
    return new URLSearchParams(useLocation().search)
  }
export default function AuthProvider({children}) {
    const [currentUser,setCurrentUser] = useState('')
    const [verified,setVerified] = useState(false)
    const [posts,setPosts] = useState([])
    const [filterPosts,setFilterPosts] = useState([])
    const [searchPosts,setSearchPosts] = useState([])
    const [errors,setError] = useState('')
    const [success,setSuccess] = useState('')
    const [isLoading,setIsLoading] = useState(false)
    const [userId,setUserId] = useState(localStorage.getItem('zimosId'))
    const navigate = useNavigate()
    const query = useQuery()
  const page = query.get('page') || 1
   
    //user
    async function signIn(data) {
        const value = await api.login(data)
        if(value.data.error){
            setError(value.data.error);
        }else{
         localStorage.setItem('zimos',value.data.token);
         localStorage.setItem('zimosId',value.data.result._id);
         setCurrentUser(value.data)
         //navigate('/')
         window.location.pathname = '/'
        }
        return value
    }
     const logout = () =>{
        localStorage.removeItem('zimosId')
        localStorage.removeItem('zimos')
        setCurrentUser('')
        window.location.pathname='/'
    }
    async function signUp(data) {
        const value = await api.register(data)
        if(value.data.error){
            setError(value.data.error);
        }else{
         localStorage.setItem('zimos',value.data.token);
         localStorage.setItem('zimosId',value.data.result._id)
         setCurrentUser(value.data)
         //navigate('/')
         window.location.pathname = '/'
        }
        return value
    }
    async function userUpdate(data) {
        const users= await api.updateUser(data)
        if(users.data.error){
        setError(users.data.error)
        }else{
            setCurrentUser(users)
            console.log(users);           
        }
        return users
    }
    async function nameUpdate(data) {
        const users= await api.updateName(data)
        if(users.data.error){
        setError(users.data.error)
        }else{
            setCurrentUser(users)
            navigate('/')
        }
        return users
    }
    async function phoneUpdate(data){
        const phone = await api.updatePhone(data)
        if(phone.data.error){
            setError(phone.data.error)
            setVerified(false)
            setSuccess('')
        }else{
            console.log(phone);
            setVerified(!verified)
            setSuccess('Your phone number has been verified click next(>) button to continue')
            return phone
        }
    }
    async function passwordUpdate(data) {
        const users= await api.updatePassword(data)
        if(users.data.error){
        setError(users.data.error)
        }else{
            setCurrentUser(users)
            navigate('/')
        }
        return users
    }
    async function deleteAccount() {
        const user = await api.deleteUser(userId)
        if(user.data.error){
            setError(user.data.error)
        }else{
            navigate('/')
        }
    }
        useEffect(()=>{
            return(async()=>{
                const user = await api.getUser()            
                setCurrentUser(user.data) 
                //console.log(user);
            })
        },[currentUser])
    
    useEffect(()=>{
        setUserId(localStorage.getItem('zimosId'))
        setIsLoading(false)
    },[isLoading,userId])
     
     async function createPost(data){
         const post = await api.newPost(data)
         if(post.data.error){
             setError(post.data.error)
             console.log(post.data.error,'POSTT');
         }else{
            return post
         }
     }
      function getPostById(id){
         const post =  api.getPost(id)
         return post
     }
     function updatePost(id,data){
         const post = api.postUpdate(id,data)
         return post
     }
     function deletePost(id){
         return api.postDelete(id)
     }
     const values={signIn,signUp,
        logout,
        currentUser,
        userUpdate,
        nameUpdate,
        phoneUpdate,
        passwordUpdate,
        deleteAccount,
        createPost,
        updatePost,
        deletePost,
        getPostById,
        setVerified,
        verified,
        setError,
        errors,
        setSuccess,
        success,
        posts,
        setPosts,
        page,
        searchPosts,
        setSearchPosts,
        setFilterPosts,
        filterPosts
    }

    return(
         <AuthContex.Provider value={values}>
             {!isLoading && children}
         </AuthContex.Provider>
    )
}
