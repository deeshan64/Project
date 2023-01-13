import React from 'react'
import style from './Activity2.module.css'


function Activity2() {
    const card = [
        {
        name:"Day 1",
        card:"10 PushUp",
        },
        {
        name:"Day 2",
        card:"Weight lifting",
        },
        {
        name:"Day 3",
        card:"Bicycle Crunch",
        },
        {
        name:"Day 4",
        card:"Bench press",
        },
        {
        name:"Day 5",
        card:"Trademil",
        },
        {
        name:"Day 6",
        card:"Running",
        },
        {
        name:"Day 7",
        card:"Swimming",
        },
        {
        name:"Day 8",
        card:"Zumba",
        },
        {
        name:"Day 9",
        card:"Pullup",
        },
        {
        name:"Day 10",
        card:"Bent-over row",
        },
    ]
    const card2 = [
        {
        name:"Day 11",
        card:"10 PushUp",
        },
        {
        name:"Day 12",
        card:"Weight lifting",
        },
        {
        name:"Day 13",
        card:"Bicycle Crunch",
        },
        {
        name:"Day 14",
        card:"Bench press",
        },
        {
        name:"Day 15",
        card:"Trademil",
        },
        {
        name:"Day 16",
        card:"Running",
        },
        {
        name:"Day 17",
        card:"Swimming",
        },
        {
        name:"Day 18",
        card:"Zumba",
        },
        {
        name:"Day 19",
        card:"Pullup",
        },
        {
        name:"Day 20",
        card:"Bent-over row",
        },
    ]
  return (
    <>
    <div className={style.main}>
      <h1>Activity</h1>
      <div className={style.body}>
      {card.map((item)=>
        <>
        <div className={style.card}>
        <div >{`${item.name}`}</div>
        <br/>
         <p>{item.card}</p>
        </div>
       
        </>
      )}
      </div> 
      <div className={style.body}>
      {card2.map((item)=>
        <>
        <div className={style.card}>
        <div >{`${item.name}`}</div>
        <br/>
         <p>{item.card}</p>
        </div>
       
        </>
      )}</div>

    </div>
    
  </>
  )
}

export default Activity2
