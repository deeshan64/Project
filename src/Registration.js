import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Style from './Reg.module.css'
import { useState } from 'react';
import { validEmail, validPassword , validusername} from './regex1';



function Registration() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const [emailErr, setEmailErr] = useState(false);
  const [usernm, setUsernm] = useState(false);
  const [pwdError, setPwdError] = useState(false);

  const validate = () => {
     if (!validEmail.test(email)) {
        setEmailErr(true);
     }
     if (!validusername.test(name)) {
        setUsernm(true);
     }
     if (!validPassword.test(password)) {
        setPwdError(true);
     }
     localStorage.setItem("NameRegister",name)
     localStorage.setItem("EmailRegister",email)
     localStorage.setItem("PasswordRegister",password)
  };
  
  
  
  
  return (
    <>
   
    <div className={Style.Body}>
    <Form className={Style.Form}>
      <h1 className={Style.Header}>Registration</h1>
      <div>
      <input  className={Style.input}
            type="text"
            placeholder="Name"
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
         <input className={Style.input}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
         />
         <br/>
         <br/>

         <div>
         <button className={Style.btn} onClick={validate}>Register</button> </div> 
         <br/>
         <h6 className={Style.bt}> Already! You have account</h6>
         <h6 className={Style.btnn}><a href="./Login">Login</a></h6>
      </div>
    </Form>
    </div>
    </>
  );
}

export default Registration;