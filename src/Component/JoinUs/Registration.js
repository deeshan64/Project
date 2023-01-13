import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Style from './Registration.module.css'
import { useState } from 'react';
import { validEmail, validPassword } from './regex.js';
import JoinNavbar from './JoinNavbar';
import { Link } from 'react-router-dom';
import validator from 'validator'


function Registration() {
   const [errorMessage, setErrorMessage] = useState('')
  const [email, setEmail] = useState('');
  const [emailErr, setEmailErr] = useState(false);
  const [pwdError, setPwdError] = useState(false);
  const [name,setName] = useState('')



  
  const validate1 = (value) => {
 
   if (validator.isStrongPassword(value, {
     minLength: 8, minLowercase: 1,
     minUppercase: 1, minNumbers: 1, minSymbols: 1
   })) {
     setErrorMessage('Is Strong Password')
   } else {
     setErrorMessage('Is Not Strong Password')
   }
   localStorage.setItem("registrationpassword",value)
 }


  const validate = () => {
     if (!validEmail.test(email)) {
        setEmailErr(true);
     }
    
     localStorage.setItem("registrationName",name)
     localStorage.setItem("registrationemail",email)
  };

  return (
    <>
   <JoinNavbar/>
    <div className={Style.Body}>
    <Form className={Style.Form}>
      <h1 className={Style.Header}>Registration</h1>
      <br/>
      <div>

      <input  className={Style.input}
            type="Text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
         />
         <br/>
         <br/>

         <input  className={Style.input}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
         />
         <br/>
         <br/>
         <div className={Style.input}>
     
        
       <input className={Style.password} 
          placeholder='Enter Password'
          type="password"
          onChange={(e) => validate1(e.target.value)}></input> <br />
        {errorMessage === '' ? null :
        <span>{errorMessage}</span>}
     
    </div>
         <br/>
         <br/>

         <div className={Style.mainbtn}>
         <button className={Style.btn} onClick={validate}>Register</button></div> 
         <br/>
         <h6 className={Style.bt}>Already have an account!</h6>
         <h6 className={Style.btnn}><Link to="/LogIn">Login</Link></h6>
      </div>
    </Form>
    </div>
    </>
  );
}

export default Registration;


 

 
  
 
 

