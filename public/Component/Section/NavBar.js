import React from 'react'
import style from './NavBar.module.css'
import Image from './Dp.png'
import { Link } from "react-scroll";
import Dropdown from 'react-bootstrap/Dropdown';
import { GiHamburgerMenu } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';



function NavBar() {
  
  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noreferrer');
  };
  
  return (
    <>  
     
    <div className={style.Wrapper}>


      <span className={style.ImgLogo} >
      <NavLink to="/Home"><img className={style.img}
            src={Image}
            alt="ProfileImg"
          /></NavLink>
        </span>
        
        <div className={style.navopt}>
    
         <Link className={style.opt} activeClass="active" to="Home" spy={true}  >Home</Link> 
         <Link className={style.opt} activeClass="active" to="AboutUs" spy={true}  >AboutUs</Link> 
         <Link className={style.opt} activeClass="active" to="Blogs" spy={true}  >Blogs</Link> 
         <Link className={style.opt} activeClass="active" to="Classess" spy={true}  >Classess</Link>
      
        </div>

   <button className={style.joinUs}  onClick={(()=> openInNewTab('http://localhost:3000/Login') )}>JoinUs</button>
   
   <Dropdown className={style.Dropdown}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
       <GiHamburgerMenu/>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/Home">Home</Dropdown.Item>
        <Dropdown.Item href="/AboutUs">AboutUs</Dropdown.Item>
        <Dropdown.Item href="/Blogs">Blogs</Dropdown.Item>
        <Dropdown.Item href="/Classess">Classess</Dropdown.Item>
        <Dropdown.Item href="/LogIn">LogIn</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

   </div>
    </>
  )
   
}

export default NavBar





