import React from 'react';

export default function Icone({ icone, estilos }) {
  return (
    <div data-test='titulo-servico' className={estilos.servicos}>
      <img src={icone.imagem} alt={icone.servico} />
      <h5>{icone.servico}</h5>
    </div>
  );
}
