import Creador from  './Creador'
import './App.css';
const Mensaje = ()=>{
  return <h1>Mi primera app en React</h1>
}
function App() {
  const a=2;
  const b= 3;
  return (
    <div className="App">
      <Mensaje></Mensaje>
      <strong>Estamos empezando la app</strong>
      <div>
        <p>El resultado de 2 +3 es : </p>
        {a+b}
        <Creador color="red" message="Tomas Paoletti"></Creador>
      </div>
    </div>
  );
}

export default App;
