import React from 'react'
import { useState } from 'react';
import './Card.css';
import CardAmount from './CardAmount';
const Card = (props) => {
    const [newAmount, setNewAmount] = useState(props.arg.amount)
    const costEditHandler=()=>
   {
      setNewAmount(newAmount+200)
   }

  return (
    <div className='main-contaier'>
        <div className='type-card'>{props.arg.type}</div>
        
       <CardAmount amount={newAmount} />
        <button onClick={costEditHandler}>Edit</button>

    </div>
  )
}

export default Card