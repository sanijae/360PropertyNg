import axios from "axios";

const Api = axios.create({baseURL:'http://localhost:5000/Property'})
const id = localStorage.getItem('zimosId')

//User 
export const register=(data) => Api.post('/user/register',data)
export const login=(data) => Api.post('/user/login',data)
export const updateUser=(data) =>  Api.put('/user/update/'+id,data)
export const updateName=(data) =>  Api.put('/user/updateName/'+id,data)
export const updatePhone=(data) =>  Api.put('/user/updatePhone/'+id,data)
export const updatePassword=(data) =>  Api.put('/user/updatePassword/'+id,data)
export const deleteUser=() => Api.delete('/user/delete/'+id)
export const getUser=() => Api.get('user/'+id)
export const getUsers=() => Api.get('user/')

export const ImageUrl = 'http://localhost:5000/Property/images'
 
//Posts
const userId = localStorage.getItem('zimosId')
export const newPost = (data) =>Api.post(`/post/newPost/${userId}`,data)
export const getPost = (postId) =>Api.get(`/post/${postId}`)
export const getPosts = (page) =>Api.get(`/post?page=${page}`)
export const fetchPostBySearch = (type,city,rooms,price,minPrice,maxPrice) =>Api.get(`/post/search?type=${type || 'none'}&city=${city || 'none'}&rooms=${rooms || 0}&price=${price || 'none'}&minPrice=${minPrice || 'none'}&maxPrice=${maxPrice || 'none'}`)
export const getPostByCity = (city) =>Api.get(`/post/city/${city}`)
export const fetchPostByCategory = (category,page) =>Api.get(`/post/category/${category}?page=${page}`)
export const fetchPostByType = (type,page) =>Api.get(`/post/type/${type || 'none'}?page=${page}`)
export const postUpdate = (id,data) =>Api.put(`/post/${id}`,data)
export const postDelete = (id) =>Api.delete(`/post/delete/${id}`)

export const fetchType = (type) =>Api.get(`/post/search?type=${type}`)
//export const userPosts = (id) =>Api.get(`post/${id}`) 