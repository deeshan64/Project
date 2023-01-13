import React from 'react'
import style from './Activity.module.css'


function Activity() {
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
  return (
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
     
    </div>
  )
}

export default Activity
