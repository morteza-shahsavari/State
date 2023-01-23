import React from 'react'
import './CardAmount.css'
const CardAmount = (props) => {
  return (
    <div>
        <div className='amount-card'>{props.amount}</div>
    </div>
  )
}

export default CardAmount