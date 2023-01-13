import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import style from './Clasess.module.css'
import Image1 from './Image/gym1.jpg'
import Pricing from "./Pricing";
import Image2 from './Image/yoga.jpg'
import Image3 from './Image/acrobic.jpg'
import Image4 from './Image/flexibility.jpg'
import Image5 from './Image/weightLoose.jpg'
import Image6 from './Image/Strecting.jpg'
import Image8 from './Image/zumba.jpg'
import Image7 from './Image/deadlift.jpg'



const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

export default function Classess() {
  return (
    <>
    <div className={style.main}>
    <span> <h1 style={{ textAlign: "center",color:"white",marginTop:"50px"}}>Training Programs</h1></span>
      <div className={style.Body}>
       
     
      <div className={style.Classes}>
        <Carousel breakPoints={breakPoints}>
          <Item>
               <div className={style.item1}>
               <img className={style.Img} src={Image1}></img>
               <h4 className={style.head}>Stronger</h4>
               </div>
          </Item>

          <Item>
               <div className={style.item1}>
               <img className={style.Img} src={Image2}></img>
               <h4 className={style.head}>Yoga</h4>
               </div>
          </Item>

          <Item>
               <div className={style.item1}>
               <img className={style.Img} src={Image3}></img>
               <h4 className={style.head}>Aerobic</h4>
               </div>
          </Item>

          <Item>
               <div className={style.item1}>
               <img className={style.Img} src={Image4}></img>
               <h4 className={style.head}>Flexibility</h4>
               </div>
          </Item>

          <Item>
               <div className={style.item1}>
               <img className={style.Img} src={Image5}></img>
               <h4 className={style.head}>Weight Loose</h4>
               </div>
          </Item>

          <Item><div className={style.item1}>
               <img className={style.Img} src={Image6}></img>
               <h4 className={style.head}>Stretching</h4>
               </div>
          </Item>

          <Item>
               <div className={style.item1}>
               <img className={style.Img} src={Image7}></img>
               <h4 className={style.head}>Deadlift</h4>
               </div>
          </Item>

          <Item>
               <div className={style.item1}>
               <img className={style.Img} src={Image8}></img>
               <h4 className={style.head}>Zumba</h4>
               </div>
          </Item>

        </Carousel>
      </div>
      </div>
      </div>
      <Pricing/>
   
    </>
  );
}

