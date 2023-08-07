import React, { useState } from 'react';
import { IProduto } from '../../types/produto';
import Botao from '../Botao';
import style from './Formulario.module.scss';
import { v4 as uuidv4 } from 'uuid';

interface Props {
  setProdutos: React.Dispatch<React.SetStateAction<IProduto[]>>
  incrementaPrecoTotal: (novoProdutoPreco: number) => void 
}

function Formulario({ setProdutos, incrementaPrecoTotal }: Props) {
  const [produto, setProduto] = useState("");
  const [preco, setPreco] = useState(0);
  function adicionarProduto(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    setProdutos(produtosAntigas => 
      [
        ...produtosAntigas,
        {
          produto,
          preco,
          selecionado: false,
          completado: false,
          id: uuidv4()
        }
      ]
    )
    incrementaPrecoTotal(preco);
    setProduto("");
    setPreco(0);
  }

  return (
    <form className={style.novoProduto} onSubmit={adicionarProduto}>
      <div className={style.inputContainer}>
        <label htmlFor="produto">
          Adicione um novo produto
        </label>
        <input
          type="text"
          name="produto"
          id="produto"
          value={produto}
          onChange={evento => setProduto(evento.target.value)}
          placeholder="O que você quer comprar?"
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="preco">
          Preço
        </label>
        <input
          type="number"
          step=".01"
          name="preco"
          value={preco}
          onChange={evento => setPreco(Number(evento.target.value))}
          id="preco"
          min="0"
          required
        />
      </div>
      <Botao type="submit">
        Adicionar
      </Botao>
    </form>
  )
}

export default Formulario;