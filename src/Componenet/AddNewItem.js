import React, { useState } from 'react'
import './AddNewItem.css'

const AddNewItem = (props) => {

    const [inputData, setInputData] = useState({type:'',amount:0})

    const CostTypechangeHendler=(e)=>{
        setInputData({...inputData,type:e.target.value})
       // setInputData((prev)=>{return {...inputData,type:e.target.value}})
    }
    const CostAmountchangeHendler=(e)=>{
        setInputData({...inputData,amount:parseInt  (e.target.value)})
    }
 const clickHandler=(e)=>
  {
    e.preventDefault();
    props.f(inputData)
    setInputData({type:'',amount:0})
    
 }
  return (
    <div>
        <form>
            <table className='Table-Add' border="1" borderColor="red">
                <tr>
                    <td><label>Cost Type:</label></td>
                    <td><input className='input-Add' type="text" value={inputData.type} onChange={CostTypechangeHendler}/></td>
                </tr>
                <tr>
                    <td><label>Cost Amount:</label></td>
                    <td><input className='input-Add' type="number" value={inputData.amount} onChange={CostAmountchangeHendler} /></td>
                </tr>
                <tr >
                    <td colSpan="2"><button className='btn-Add' onClick={clickHandler}>ADD New Item</button></td>
                </tr>
            </table>
        </form>
    </div>
  )
}

export default AddNewItem