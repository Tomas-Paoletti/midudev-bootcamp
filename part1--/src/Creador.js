const Creador = (props) =>{
    return( <p style={{color:props.color}}/* asi se pasan atributos al style*/>El creador de la app es: {props.message} </p>)//como pasar datos desde una propiedad desde ell componenete principál a uno expoertado
}
export default Creador;