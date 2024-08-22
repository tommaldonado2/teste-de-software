import React from 'react';
import ilustracaoBanner from 'assets/ilustracao-banner.svg';
import estilos from './Inicio.module.css';
import presente from 'assets/presente.svg';
import saque from 'assets/saque.svg';
import estrela from 'assets/estrela.svg';
import dispositivo from 'assets/dispositivo.svg';

export default function Inicio() {
  return (
    <>
      <div className={estilos.container}>
        <div className={estilos.conteudo}>
          <div className={estilos.banner} data-test="titulo-principal">
            <h1 data-test="titulo-principal">
              Experimente mais liberdade no controle da sua vida financeira.
              Crie sua conta com a gente!
            </h1>
            <img data-test="imagem01"
              src={ilustracaoBanner}
              alt="Gráficos e uma pessoa com dinheiro na mão"
            />
          </div>
          <div className={estilos.vantagens}>
            <h2 data-test="titulo-sub">Vantagens do nosso banco:</h2>
            <div className={estilos.vantagens__itens}>
              <div className={estilos.vantagens__item}>
                <img data-test="imagem02" src={presente} alt="ícone de um presente" />
                <h3 data-test="texto01">Conta e cartão gratuitos</h3>
                <p data-test="texto01">
                  Isso mesmo, nossa conta é digital, sem custo fixo e mais que
                  isso: sem tarifa de manutenção.
                </p>
              </div>
              <div className={estilos.vantagens__item}>
                <img data-test="imagem03" src={saque} alt="ícone de uma mão segurando um dinheiro" />
                <h3 data-test="texto02">Saques sem custo</h3>
                <p data-test="texto02">
                  Você pode sacar gratuitamente 4x por mês de qualquer Banco
                  24h.
                </p>
              </div>
              <div className={estilos.vantagens__item}>
                <img data-test="imagem04" src={estrela} alt="ícone de uma estrela" />
                <h3 data-test="texto03">Programa de pontos</h3>
                <p data-test="texto03">
                  Você pode acumular pontos com suas compras no crédito sem
                  pagar mensalidade!
                </p>
              </div>
              <div className={estilos.vantagens__item}>
                <img data-test="imagem05"
                  src={dispositivo}
                  alt="ícone de um dispositivo como notebook"
                />
                <h3 data-test="texto04">Seguro Dispositivos</h3>
                <p data-test="texto04">
                  Seus dispositivos móveis (computador e laptop) protegidos por
                  uma mensalidade simbólica.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}