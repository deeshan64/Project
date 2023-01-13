import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Style from './Log.module.css'
import { useState } from 'react';
import { validEmail} from './regex.js';
import JoinNavbar from './JoinNavbar';
import { Link ,useNavigate } from 'react-router-dom';
import validator from 'validator'



function Log() {
  const navigate = useNavigate()
   const [errorMessage, setErrorMessage] = useState('')
  const [email, setEmail] = useState('');

  const [emailErr, setEmailErr] = useState(false);
  



  
  const validate1 = (value) => {
 
   if (validator.isStrongPassword(value, {
     minLength: 8, minLowercase: 1,
     minUppercase: 1, minNumbers: 1, minSymbols: 1
   })) {
     setErrorMessage(' ')
   } else {
     setErrorMessage('')
   }
   localStorage.setItem("Loginpassword",value)
 }

 
  const validate = () => {
   
   
     if (!validEmail.test(email)) {
        setEmailErr(true);
     }
    
     localStorage.setItem("Loginemail",email)
    
     
     if(localStorage.getItem('Loginemail') === localStorage.getItem('registrationemail') && localStorage.getItem('Loginpassword') === localStorage.getItem('registrationpassword') ){
          alert("Login sucessful ✅") 
          navigate('/Home')
     }else{
          alert("Login unsucessful ⚠️")
     }
    
  };

  return (
    <>
   <JoinNavbar/>
    <div className={Style.Body}>
    <Form className={Style.Form}>
      <h1 className={Style.Header}>Login</h1>
      <div>
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

         <div>
         <button className={Style.btn} onClick={validate} >Login</button></div> 
         <br/>
         <h6 className={Style.bt}>Don't have account</h6>
         <h6 className={Style.btnn}><Link to="/Registration">Register</Link></h6>
      </div>
    </Form>
    </div>
    </>
  );
}

export default Log;


 

 
  
 
 

