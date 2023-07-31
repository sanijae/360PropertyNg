const { default: axios } = require("axios");

const API = axios.create({baseURL:'http://localhost:5000/Property'})
export const ImageUrl = 'http://localhost:5000/Property/images'
const uid = localStorage.getItem('')

//Adminss

const AdminAPI = axios.create({baseURL:'http://localhost:5000/Admin'})
export const getAdmins =()=>AdminAPI.get('/')
export const getAdmin =(id)=>AdminAPI.get(`/${id}`)

export const AddAdmin =(data)=>AdminAPI.post('/add',data)
export const loginAdmin =(data)=>AdminAPI.post('/login',data)

export const updateAdmin =(id,data)=>AdminAPI.put(`/update/${id}`,data)
export const updateAdminPassword =(id,data)=>AdminAPI.put(`/update/updatePassword/${id}`,data)
export const deleteAdmin =(id)=>AdminAPI.delete(`/delete/${id}`)


//Users

export const getUsers =()=>API.get('/user')
export const getUser =(id)=>API.get(`/user/${id}`)

export const AddUser =()=>API.post('/user')

export const updateUser =(id)=>API.put(`/user/${id}`)
export const deleteUser =(id)=>API.delete(`/user/${id}`)

//Posts

export const getPosts =()=>API.get('/post')
export const getPost =(id)=>API.get(`/post/${id}`)

export const createPost =(data)=>API.post(`/post/newPost/${uid}`,data)
export const updatePost =(id,data)=>API.put(`/post/${id}`,data)
export const deletePost =(id)=>API.delete(`/post/${id}`)

// Blog Posts

export const getBlogPosts =()=>API.get('/')
export const getBlogPost =(id)=>API.get(`/${id}`)

export const createBlogPost =(data)=>API.post(`/add`,data)
export const updateBlogPost =(id,data)=>API.put(`/update/${id}`,data)
export const deleteBlogPost =(id)=>API.delete(`/delete/${id}`)


//Note Posts

export const getNotes =()=>API.get('/')
export const getNote =(id)=>API.get(`/${id}`)
export const updateNote =(id,data)=>API.put(`/${id}`,data)
export const deleteNote =(id)=>API.delete(`/${id}`)