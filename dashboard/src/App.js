import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Navbar from './Component/Navbar/Navbar'
import Sidebars from './Component/Sidebar/SideBar'
import { AppBar, Content, GlobalStyle, Main, Section, Sidebar } from './GlobalStyle'
import Blog from './Pages/Blog'
import Dashboard from './Pages/Dashboard'
import Notification from './Pages/Notification'
import Posts from './Pages/Posts'
import Users from './Pages/Users'
import Footer from './Component/Footer/Footer'
import Detail from './Component/Post/Detail'
import Images from './Component/Post/Images'
import Auth from './Component/Admin/Auth/Auth'
import Admins from './Component/Admin/Admins'
import AddminDetail from './Component/Admin/AddminDetail'

export default function App() {
  return (
    <div>
      <GlobalStyle/>
      <Section>
        <AppBar>
          <Navbar/>
        </AppBar>
        <Main>
          <Sidebar>
            <Sidebars/>
          </Sidebar>
          <Content>
            <Routes>
              <Route path='/' element={<Dashboard/>} />
              <Route path='/Users' element={<Users/>} />
              <Route path='/Posts' element={<Posts/>} />
              <Route path='/Blogs' element={<Blog/>} />
              <Route path='/Admin' element={<Admins/>} />
              <Route path='/AdminDetail/:id' element={<AddminDetail/>} />
              <Route path='/Notifications' element={<Notification/>} />

              <Route path='/Post/:id' element={<Detail/>} />
              <Route path='/Images/:id' element={<Images/>} />

              {/* Auth Route */}
              <Route path='/Auth' element={<Auth/>} />              
            </Routes>
            <Footer/>
          </Content>
        </Main>
      </Section>
    </div>
  )
}
