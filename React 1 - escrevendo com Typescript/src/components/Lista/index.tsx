import React from 'react';
import { IProduto } from '../../types/produto';
import Item from './Item';
import style from './Lista.module.scss';

interface Props {
  produtos: IProduto[],
  selecionaProduto: (produtoSelecionada: IProduto) => void 
  finalizarProduto: () => void
}


function Lista({ produtos, selecionaProduto, finalizarProduto }: Props) {
  return (
    <aside className={style.listaProdutos}>
      <h2> Lista de Compra </h2>
      <ul>
        {produtos.map(item => (
          <Item
            selecionaProduto={selecionaProduto}
            key={item.id}
            finalizarProduto={finalizarProduto}
            {...item}
          />
        ))}
      </ul>
    </aside>
  )
}

export default Lista;