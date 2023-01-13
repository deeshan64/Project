import React from 'react'
import NavBar from '../Section/NavBar'
import style from './Home.module.css'
import Image from './Image/backGround.jpg'
import Footer from '../Section/Footer'
import AboutUs from './AboutUs'
import Blogs from './Blogs'
import Classess from './Classess'



export default function Home() {
  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noreferrer');
  };

  return (
    <>
    <NavBar/>
   
    <div className={style.main} id='Home'>
    
      <div>
      <img className={style.Img} src={Image} alt='BackGround' ></img>
     
      </div>
      <div className={style.body}>
      <div className={style.Para}>"Take care of you <span style={{color:'red'}}>body.</span> </div>
      <div className={style.Para}>It's the only place to <span style={{color:'red'}}>live.</span>"</div>
      <br/>
      <br/>
      <br/>
      <button className={style.joinBtn}  onClick={(()=> openInNewTab('http://localhost:3000/Login') )}>Join with us</button>
     
      </div>
  
    
      
    </div>
    <div id='AboutUs'><AboutUs/></div> 
    <div id="Blogs"><Blogs/></div>
    <div id="Classess"><Classess/></div>                               
    <Footer/>
    </>
  )
}
