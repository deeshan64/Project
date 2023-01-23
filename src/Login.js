import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Style from './Log.module.css'
import { useState } from 'react';
import { validEmail, validPassword } from './regex.js';
import { useNavigate } from 'react-router-dom';


function Log() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailErr, setEmailErr] = useState(false);
  const [pwdError, setPwdError] = useState(false);
  const navigate = useNavigate()
  const validate = () => {
     if (!validEmail.test(email)) {
        setEmailErr(true);
     }
     if (!validPassword.test(password)) {
        setPwdError(true);
     }
     localStorage.setItem("EmailLogin",email)
     localStorage.setItem("PasswordLogin",password)
     
     if(localStorage.getItem('EmailLogin') === localStorage.getItem('EmailRegister') && localStorage.getItem('PasswordLogin') === localStorage.getItem('PasswordRegister') ){
         alert("Login sucessful ✅")
         navigate('/')

     }else{
         alert("Login unsucessful ⚠️")
     }
    
  };

  return (
    <>
   
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
         <input className={Style.input}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
         />
         <br/>
         <br/>

         <div>
         <button className={Style.btn} onClick={validate}>Login</button> </div> 
         <br/>
         <h6 className={Style.bt}>Don't have account</h6>
         <h6 className={Style.btnn}><a href="./Registration">Register</a></h6>
      </div>
    </Form>
    </div>
    </>
  );
}

export default Log;