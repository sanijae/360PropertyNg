import { Items, LogButton, Wrapper } from "./styledSidebar";
import { List, ListAlt, Notifications, People, PieChart, Security } from '@mui/icons-material'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LOG_OUT } from "../../Data/types";


export default function Sidebars() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  function logOut(){
    try {
      dispatch({type:LOG_OUT})
      window.location.pathname='/'
    } catch (error) {
      alert(error.message)
    }
  }
  return (
    <Wrapper>
      <Items onClick={()=>navigate('/')} >
        <PieChart/>
         <p>Dashboard</p>
      </Items>
      <Items onClick={()=>navigate('/Users')}>
        <People/>
        <p>Users</p>
      </Items>
      <Items onClick={()=>navigate('/Posts')}>
        <List/>
        <p>Posts</p>
      </Items>
      <Items onClick={()=>navigate('/Blogs')}>
        <ListAlt/>
        <p>Blog</p>
      </Items>
      <Items onClick={()=>navigate('/Notifications')}>
        <Notifications/>
        <p>Notifications</p>
      </Items>
      <Items onClick={()=>navigate('/Admin')}>
        <Security/>
        <p>Admin</p>
      </Items>
      <LogButton onClick={logOut} >
        Log Out
      </LogButton>
    </Wrapper>
  );
}