import React from 'react'
import style from './Blogs.module.css'
import Image1 from './Image/gym1.jpg'
import Image2 from './Image/gym2.jpg'


function Blogs() {
  return (
    <>
    <div className={style.mainClass}>
    <div className={style.upper}> 
<img className={style.img1} src={Image1} alt='gym'/>
        <div className={style.about}>
          <h2 style={{color:'red',marginTop:'30px'}}>Article</h2>
   
          <p style={{color:'white'}}>Before we jump into some key faces in the fitness blogging world, let’s break down some of the latest blogging statistics. It feels like blogging as a form of content marketing has been around for a while. But it has evolved over time with many fitness bloggers using their platform to grow their business and leverage their audience base. </p>

<button onClick={(()=>alert("clicked read article✅"))} className={style.btn}>Read Article</button>
        </div>
      </div>
      <br/>
     <div className={style.lower}>
      <div className={style.para2}>
        <h2 style={{color:'red'}}>They Solve a Problem </h2>
        
        <p style={{color:'white'}}>A great blog solves a problem. Often people seek out information to solve a problem in their life. For example, a fitness blog that helps mothers work out throughout pregnancy and focuses on post-natal health and fitness is helping to solve a specific issue. Having a niche is super beneficial in all areas of your business and content. When your service or offer solves a problem, it provides more value to your target audience. </p>
        
<button onClick={(()=>alert("clicked read article✅"))}
 className={style.btn}>Read Article</button>
        </div>
      <div>
      <img className={style.img2} src={Image2} alt='gym'/>
        </div>
    
      
    </div>
    

      </div>
     
      </>
  )
}

export default Blogs
