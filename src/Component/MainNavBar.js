import { Link } from 'react-router-dom';
import {useAuth} from '../Component/AuthContaxt'
// import axios from 'axios';
import './Style/Mainnav.css'
export default function MainNavBar() {

    const {logOut} = useAuth();
    const handleout = () =>{
        logOut();
    }
    return (
      <div className='nav'>
         <Link to="/addemp">Add Employee</Link>
          <Link to="/view">View All Employee</Link>
          <button onClick={handleout}>LogOut</button>
           
      </div>
    )
  }
