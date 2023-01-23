import React from 'react'
import './Card.css';
import CardAmount from './CardAmount';
class CardState extends  React.Component{
   constructor(props){
       super(props)
      this.state={data:props.arg.amount}

    this.costEditHandler=()=>{this.setState({data:this.state.data+100})}
   }
  render() {
    return ( 
    <div className='main-contaier'>
    <div className='type-card'>{this.props.arg.type}</div>
   <CardAmount amount={this.state.data} />
    <button onClick={this.costEditHandler}>Edit</button>

</div>)

    }
}

export default CardState