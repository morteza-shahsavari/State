
import { useState } from 'react';
import './App.css';
import AddNewItem from './Componenet/AddNewItem';
import Card from './Componenet/Card';
import CardState from './Componenet/CardState';
const data=[{type:"Laptop Asus",amount:1000},
{type:"Laptop Hp",amount:2000},
{type:"Laptop Apple",amount:3000}]
function App() {
//  return <Card key={index} arg={item} />
const [dataCard, setDataCard] = useState(data)
const func=(newObject)=>{
  setDataCard(data.push(newObject)) 
  console.log(dataCard)
}
  return (
    <div className="App">
      {
        data.map((item,index)=>{
        
         return <CardState key={index} arg={item} />
        })
      }

      <AddNewItem f={func}/>
      
    </div>
  );
}

export default App;
