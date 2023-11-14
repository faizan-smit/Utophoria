import { useRef, useContext } from "react";
import axios from "axios";
import { GlobalContext } from "../../../context/context";
import './login.css';
import api from "../../../axios";


let Login = ()=>{


    let { state, dispatch } = useContext(GlobalContext);

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    let loginHandler = async(e)=>{

        e.preventDefault();


        try{
         let axiosresponse = await api.post('/api/v1/login', {

            email: emailRef.current.value,
            password: passwordRef.current.value,
        });

        console.log(axiosresponse)

        dispatch({
            type: 'USER_LOGIN',
            payload: axiosresponse.data.data

            
        })


        }catch(e){

        }
    
    
    }





    return(
        <>
        

        <div>This is Login!</div>
        

         <div>


            <form className="login-form" onSubmit={loginHandler}>

                <input type="email" name="" id="email" ref={emailRef} placeholder="Email" required autoComplete="off" />
                <input type="password" name="" id="password" ref={passwordRef} placeholder="Password" required autoComplete="off" />
                <button type="submit">Login</button>



            </form>


        </div>
        
        </>
    )


}

export default Login