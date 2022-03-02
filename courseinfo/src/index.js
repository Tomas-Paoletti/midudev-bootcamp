import React from 'react'
import ReactDOM from 'react-dom'

const Title = ({titulo})=> <h1>{titulo}</h1> 
const Subtitle=(props)=>{
  
  return( <p>{props.message} "nro"{props.num}</p>   
    
    )
  }
  const num1=10
  const num2=7
  const num3=14
  let sumar= num1+num2+num3
  const Total=()=>{
    return (<h2>El numero total es: {sumar}</h2>)
    }
const App = () => {
 
  

  return (
    <div>
      <Title titulo="Primer Ejercicio"></Title>
      <p>
        <Subtitle message="Este es mi primer ejercio" num="1" ></Subtitle>
      </p>
      <p>
      <Subtitle message="Segundo ejercicio "num="2" ></Subtitle>
      </p>
      <p>
      <Subtitle message="Tercer ejercicio "num="3" ></Subtitle>
      </p>
      <Total></Total>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))