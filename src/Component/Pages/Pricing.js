import React from 'react'
import style from "./Pricing.module.css"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import {atom , useRecoilState} from 'recoil'
import { Atom } from './Atom';

function Pricing() {
  const [subscribe, setSubscribe ] = useRecoilState(Atom)

  function getdata(){
    console.log(subscribe)
    setSubscribe(subscribe)
  }

  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noreferrer');
  };
  return (
    <div className={style.main}>
        <div className={style.rightDiv}>

            <div className={style.Card1}>
                <h4>10 Day</h4>
                <div style={{display:"flex",color:"green"}}>
                <span style={{fontSize:'20px'}}>$</span>
                <h1>45</h1>
                </div>
                <div>
                <p className={style.P}>/ Pass</p>
                <p>✅10 day Pass</p>
                <p>✅Free Gym Access</p>
                <p>✅24 Hour Access</p>
                </div>
               
                <span>
          <Popup  trigger={<button  onClick={getdata} className={style.button3}> Get Started </button>} 
             position="right center">
            <div style={{backgroundColor:'rgb(82, 79, 79)',color:'white'}}>Are you sure! Get Started?</div>
            <div className={style.button}>
            <button className={style.button1}  onClick={(()=> openInNewTab('http://localhost:3000/Activity') )}>Yes</button>
            <button className={style.button1} >No</button>
            </div>
          </Popup>
        </span>

                
            </div>
            <div className={style.Card2}>
            <h4 className={style.h}>Month to Month</h4>
                <div style={{display:"flex",color:"green"}}>
                <span style={{fontSize:'20px'}}>$</span>
                <h1>90</h1>
                </div>
                <div>
                <p className={style.P}>/ Month</p>
                <p>✅$99 Joining Fee</p>
                <p>✅No Contract</p>
                <p>✅Free Gym Access</p>
                </div>
               
               
        <span>
          <Popup  trigger={<button className={style.button2}> Get Started </button>} 
             position="right center">
            <div style={{backgroundColor:'rgb(82, 79, 79)',color:'white'}}>Are you sure! Get Started?</div>
            <div className={style.button}>
            <button className={style.button1}  onClick={(()=> openInNewTab('http://localhost:3000/Activity2') )}>Yes</button>
            <button className={style.button1}>No</button>
            </div>
          </Popup>
        </span>

            </div>
        </div>

        <div className={style.leftDiv}>
            <h1 style={{textDecoration:"underline",color:"red",textDecorationColor:"green"}}>Member Ship</h1>
            <br/>
            <br/>
            <div>
                <p style={{color:'white'}}>
        <span><h4>From Punch Pass to Monthly or Annual</h4></span>
        <br/>
        <br/>

At Gym Base, we offer a wide range of membership with options to suit every budget. Everything from One Day Pass, Punch Pass to monthly or annual prepaid memberships. What's more, we wont tie you in to a long term contract, giving you greater flexibility.
<br/>
<br/>
<span><h4>Each plan included</h4></span>
<br/>
<br/>
<div className={style.list}>
➡️The best equipment global brands
<br/>
➡️The gym is open 24 hours a day, 7 days a week
<br/>
➡️Two safe payment methods
<br/>
➡️Group fitness classes in the price of the subscription
<br/>
➡️No long-term contract, period
</div>

</p>
            </div>
        </div>
      
    </div>
  )
}

export default Pricing
