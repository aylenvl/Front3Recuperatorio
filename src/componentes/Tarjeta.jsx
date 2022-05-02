import Item from "./Item";
import "../index.css";

const listadoPlataformas = ["Twitter", "Facebook", "Youtube"];

// CONSIGNAS EN TARJETA:
// 1- importar Item
// 2- utilizar el listadoPlataformas para renderizar la cantidad de Items acorde al array 🚩
// 3- cada item debe tener como propiedades su key, pasar el metodo para elegir como favorita heradado por su padre y presentar el nombre de la plataforma

export default function Tarjeta(props) {


  let itemsPlataformas = listadoPlataformas.map((plataforma, index) => <Item value={plataforma} onClick={() => {props.handleFav(plataforma)}}key={index.toString()} className="li"/>)
  return (
    
    <ul className="ul">
      {itemsPlataformas}
    </ul>
  );
}