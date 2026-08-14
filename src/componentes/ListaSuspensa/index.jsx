import "./lista-suspensa.estilos.css";

export function ListaSuspensa(props) {
  return (
    <select className="listaSuspensa" {...props}>
      <option>Selecione uma opção</option>
      <option>Macaquito</option>
      <option>Doguito</option>
      <option>Gatito</option>
      <option>Lambari</option>
    </select>
  );
}
