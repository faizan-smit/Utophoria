import { useRef  } from "react";
import axios from "axios";
import './signup.css';
import api from "../../../axios";


let Signup = ()=>{


    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const passwordConfirmRef = useRef(null);
    const userNameRef = useRef(null);

    let signupHandler = async (e) => {
        e.preventDefault();
    
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            alert("Passwords do not match");
            return;
        }
    
        try {
            const response = await api.post('/api/v1/signup', {
                firstName: firstNameRef.current.value,
                lastName: lastNameRef.current.value,
                email: emailRef.current.value,
                password: passwordRef.current.value,
                username: userNameRef.current.value,
            });
    
            console.log(response.data);
        } catch (error) {
           
            console.error(error);
        }
    };



    return(
        <>
        

        <div>This is Signup!</div>


            <div>


                <form className="signup-form" onSubmit={signupHandler}>

                    <input type="text" name="" id="firstName" ref={firstNameRef} placeholder="First Name" required autoFocus={true} autoComplete="off" />
                    <input type="text" name="" id="lastName" ref={lastNameRef} placeholder="Last Name" required autoComplete="off" />
                    <input type="email" name="" id="email" ref={emailRef} placeholder="Email" required autoComplete="off" />
                    <input type="text" name="" id="username" ref={userNameRef} placeholder="Username" required autoComplete="off" />
                    <input type="password" name="" id="password" ref={passwordRef} placeholder="Password" required autoComplete="off" />
                    <input type="password" name="" id="confirmPassword" ref={passwordConfirmRef} placeholder="Confirm Password" required autoComplete="off" />
                    <button type="submit">Signup</button>



                </form>

            </div>
        
        
        </>
    )


}

export default Signup