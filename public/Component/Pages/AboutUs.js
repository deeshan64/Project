import React from 'react';
import style from './About.module.css'
import Iframe from 'react-iframe'



function AboutUs() {
  return (
    <>
   
    
    <div className={style.main}>
      
      <div className={style.upper}> 
     


      <Iframe url="https://www.youtube.com/embed/u_43TaSoRMA"
        width="300px"
        height="200px"
        allowfullscreen
        title="YouTube"
        className={style.video}
        />
        <div className={style.about}>
          <h2 style={{color:'red'}}>About Us</h2>
          <br/>
          <p style={{color:'white'}}>Our specialists are very prepared and fit the bill to furnish you with shape-centered alterations that will push you as far as possible without bargaining your security.

Expect high-vitality quick-paced exercises that leave each muscle shaking. ‘Organization Name’ was established in 2012 by Jeanette and Ryan and now we have 2 NYC areas… with a third in transit!</p>

<button onClick={(()=>alert("clicked Learn more✅"))} className={style.btn}>Learn more</button>


        </div>
      </div>
     <div className={style.lower}>
      <div className={style.para2}>
        <h2 style={{color:'red'}}>Why choose us?</h2>
        <br/>
        <ul>
          <li className={style.li}>Consultations with expert</li>
          <p style={{color:'white'}}>As part of IESALC’s project on the Futures of Higher Education, we collaborated with higher education experts from every part of the world. </p>
          
          <li className={style.li}>Best workout facilities</li>
          <p style={{color:'white'}}>Open spaces, lots of equipment, excellent group fitness classes, and extra amenities like basketball courts, pools, saunas, and spas make 24-Hour Fitness our top pick.</p>
        </ul>
        </div>
      <div>
     <Iframe url="https://www.youtube.com/embed/E7rb775FmYk"
        width="300px"
        height="200px"
        allowfullscreen
        title="YouTube"
        className={style.video2}
        />
        </div>
     </div>
      
    </div>

    </>
  )
}

export default AboutUs
