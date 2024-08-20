import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { handleSuccess } from "../util";
import { ToastContainer } from "react-toastify";

function Home() {
  const [loggedInUser, setLoggedInUser] = useState('');
  const navigate = useNavigate();
  useEffect(()=>{
    setLoggedInUser(localStorage.getItem('loggedInUser'))
  },[])

  const handleLogout = (e)=>{
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser')
    handleSuccess(`${loggedInUser} logged out`)
    setTimeout(()=>{
      navigate('/login');
    }, 1000)
  }
  return (
    <div>
      <h1>Welcome {loggedInUser}</h1>
      <button onClick={handleLogout}>Logout</button>
      <ToastContainer/>
    </div>
  );
}

export default Home;
