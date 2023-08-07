import React from 'react';
import { IProduto } from '../../types/produto';
import Botao from '../Botao';
import style from './AreaCompra.module.scss';

interface Props {
  setProdutos: React.Dispatch<React.SetStateAction<IProduto[]>>
  setPrecoTotal: React.Dispatch<React.SetStateAction<number>>
  precoTotal: number;
}

function AreaCompra({ setProdutos, setPrecoTotal, precoTotal }: Props) {
  function finalizarCompra() {
    setProdutos([]);
    setPrecoTotal(0);
  }

  return (
    <div className={style.compraContainer}>
        <label>
          Preço Total:
        </label>
        <label>
          {precoTotal}
        </label>
        <Botao onClick={() => finalizarCompra()}>
            Comprar
        </Botao>
    </div>
  )
}

export default AreaCompra;