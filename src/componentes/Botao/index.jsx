import "./botao.estilos.css";

export function Botao({ id, type, children }) {
  return (
    <button id={id} type={type}>
      {children}
    </button>
  );
}
