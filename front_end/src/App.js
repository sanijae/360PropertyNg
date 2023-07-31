import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Appbar from "./Component/AppBar/Appbar";
import GlobalStyle from "./GlobalStyle";
import 'bootstrap/dist/css/bootstrap.min.css'
import Auth from "./Component/Auth/Auth";
import Home from "./Pages/Home/Home";
import Details from "./Pages/Details/Details";
import AuthProvider from "./Hooks/useHooks";
import Account from "./Component/Accounts/Account";
import { UserModal } from "./Component/Accounts/Modal/UserModal";
import ManageHost from "./Component/Hosting/ManageHost";
import CreatePost from "./Component/Hosting/Add/CreatePost";
import AllImages from "./Pages/Details/AllImages";
import ManageDetail from "./Component/Hosting/Detail/ManageDetail";
import Footer from "./Component/Footer/Footer";
import AddPost from "./Component/Hosting/Add/AddPost";
import About from "./Pages/About/About";
import ContactForm from "./Pages/Contact/ContactForm";
import Sale from "./Pages/Sale/Sale";
import Rent from "./Pages/Rent/Rent";
import SearchPage from "./Pages/Search/SearchPage";
import UserDetail from "./Component/Hosting/Add/UserDetail";
import FilterPost from "./Pages/Filter/FilterPost";
import Why from './Component/FooterPages/Why'
import Blogs from './Component/Blog/Blog'
import Faqs from './Component/Blog/Faqs'
import Support from './Component/Blog/support'
import Privacy from './Component/FooterPages/Privacy'
import Terms from './Component/FooterPages/Terms'
import BlogDetail from "./Component/Blog/BlogDetail";


function App() {  
  return (
      <BrowserRouter>
        <AuthProvider>
        <GlobalStyle/>
        <Appbar/>
       <Routes style={{paddingTop:"4em"}}>
         <Route path="/" exact element={<Navigate to={'/posts'} replace />} />
         <Route path="/posts" exact element={<Home/>} />
         <Route path="/*" exact element={<Home/>} />
         <Route path="/About" element={<About/>} />
         <Route path="/Sale" element={<Sale/>} />
         <Route path="/Rent" element={<Rent/>} />
         <Route path="/Post/Filter" element={<FilterPost/>} />
         <Route path="/Post/Search" element={<SearchPage/>} />
         <Route path="/Contact" element={<ContactForm/>} />
         <Route path="/Auth" element={<Auth/>} />         
         <Route path="/Details/:id" element={<Details/>} />
         <Route path="/AllImages/:id" element={<AllImages/>} />
         <Route path="/UserModal" element={<UserModal/>} />
         <Route path="/Why" element={<Why/>} />
         <Route path="/Blogs" element={<Blogs/>} />
         <Route path="/BlogDetail" element={<BlogDetail/>} />
         <Route path="/Faqs" element={<Faqs/>} />
         <Route path="/Support" element={<Support/>} />
         <Route path="/Privacy" element={<Privacy/>} />
         <Route path="/Terms" element={<Terms/>} />
         {/* Access control */}        
         <Route path="/Account" element={<AuthCheck>
          <Account/>
         </AuthCheck>} />
         <Route path="/UserDetail" element={<AuthCheck>
          <UserDetail/>
         </AuthCheck>} />
         <Route path="/CreatePost" element={<AuthCheck>
          <CreatePost/>
         </AuthCheck>} />
         <Route path="/Add" element={<AuthCheck>
          <AddPost/>
         </AuthCheck>} />
         <Route path="/ManageHost" element={<AuthCheck>
          <ManageHost/>
         </AuthCheck>} />
         <Route path="/ManageDetail/:id" element={<AuthCheck>
           <ManageDetail/>
           </AuthCheck>} />
       </Routes>
       <Footer/>
       </AuthProvider>
      </BrowserRouter>
  );
}
export function AuthCheck({children}){
  const user = localStorage.getItem('zimos')
  return user ? children : <Navigate to='/Auth' replace />
}
export default App;
