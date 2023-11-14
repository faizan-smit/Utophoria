import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import './App.css';
import { GlobalContext } from './context/context';
import Navbar from './components/navbar/navbar';
import Home from './components/pages/home/home';
import Profile from './components/pages/profile/profile';
import Signup from './components/pages/signup/signup';
import Login from './components/pages/login/login';
import Chat from './components/pages/chat/chat';
import api from './axios';



let App= ()=> {


  let { state, dispatch } = useContext(GlobalContext);

  

  useEffect(()=>{
    let checkLoginStatus = async()=> {

      try{
  
        let axiosResponse = await api.post('/api/v1/authStatus');
        console.log(axiosResponse);
        dispatch({
          type: "USER_LOGIN",
          payload: axiosResponse.data.data,
        })
        
        console.log("User Logged In");
  
  
  
      }catch(e){
  
        console.log("User not Logged In");
  
      }
  
    };
    checkLoginStatus();
  },[]);




  return (
    <>
    
    <Navbar />
    <div className='spacer'></div>

    {(state.isLogin)?(<Routes>
    <Route path='/' element={<Home />} />
    <Route path='/users/:username' element={<Profile />} />
    <Route path='/chat' element={<Chat />} />
    <Route path='*' element={<Navigate to='/' replace={true} />} />


    </Routes>)
    :
    (<Routes>
    <Route path='/' element={<Home />} />
    <Route path='/signup' element={<Signup />} />
    <Route path='/login' element={<Login />} />
    <Route path='*' element={<Navigate to='/' replace={true} />} />

    </Routes>)}
    
    
    
    </>
  );
}

export default App;
