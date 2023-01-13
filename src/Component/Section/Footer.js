import React from 'react'
import style from './Footer.module.css'
import {BsFacebook } from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';
import {AiFillTwitterCircle} from 'react-icons/ai';
import {AiFillYoutube} from 'react-icons/ai';


function Footer() {
  return (
    <div className={style.main}>
        <div className={style.list}>
        <div className={style.gym}>
            <span style={{color:"red",fontWeight:700}}>GYM</span>
            <p style={{color:'white'}}>"Strength does not come from physical capacity."
</p>
<div className={style.icon}>
<a style={{color:"red"}} href="https://www.facebook.com/"><BsFacebook/></a>
&nbsp;&nbsp;
<a style={{color:"red"}} href="https://www.instagram.com/"><BsInstagram/></a>
&nbsp;&nbsp;
<a style={{color:"red"}} href="https://www.twitter.com/"><AiFillTwitterCircle/></a>
&nbsp;&nbsp;
<a style={{color:"red"}} href="https://www.youtube.com/"><AiFillYoutube/></a>
</div>


            </div>
      <div className={style.list1}> 
        <ul>
            <li>Healthy Living</li>
            <li>Healthy Body</li>
            <li>Healthy Lifestyle</li>
            <li>Fit Body</li>
            <li>System</li>
        </ul>
        </div>
      <div className={style.list2}> 
         <ul>
            <li>Service</li>
            <li>Application</li>
            <li>Affiliate Program</li>
            <li>Promotion</li>
            <li>Documentation</li>
        </ul>
        </div>
      <div className={style.list3}>
      <ul>
            <li>About Us</li>
            <li>Blog</li>
            <li>Career</li>
            <li>Partnership</li>
            <li>FAQ</li>
        </ul>
      </div>
        </div>
     <p className={style.Footer}>&#169; 2023 Developer.All Rights Reserved
</p>
    </div>
  )
}

export default Footer
