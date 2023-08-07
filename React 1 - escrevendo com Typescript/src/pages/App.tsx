import React, { useState } from 'react';
import Formulario from '../components/Formulario';
import AreaCompra from '../components/AreaCompra';
import Lista from '../components/Lista';
import { IProduto } from '../types/produto';
import style from './App.module.scss';

function App() {
  const [produtos, setProdutos] = useState<IProduto[]>([]);
  const [selecionado, setSelecionado] = useState<IProduto>();
  const [precoTotal, setPrecoTotal] = useState<number>(0);

  function selecionaProduto(produtoSelecionada: IProduto) {
    setSelecionado(produtoSelecionada);
    setProdutos(produtosAnteriores => produtosAnteriores.map(produto => ({
      ...produto,
      selecionado: produto.id === produtoSelecionada.id ? true : false
    })))
  }

  function incrementaPrecoTotal(novoProdutoPreco: number) {
    setPrecoTotal(precoTotal+novoProdutoPreco);
  }

  function finalizarProduto() {
    if(selecionado) {
      setPrecoTotal(precoTotal-selecionado.preco)
      setSelecionado(undefined);
      var index =  produtos.findIndex(produto => produto.id === selecionado.id);
      if (index > -1) {
        produtos.splice(index, 1);
      }
  }}

  return (
    <div className={style.AppStyle}>
      <Formulario 
        setProdutos={setProdutos} 
        incrementaPrecoTotal={incrementaPrecoTotal}
        />
      <AreaCompra
        setProdutos={setProdutos} 
        setPrecoTotal={setPrecoTotal}
        precoTotal={precoTotal}
        />
      <Lista
        produtos={produtos}
        selecionaProduto={selecionaProduto}
        finalizarProduto={finalizarProduto}
      />
    </div>
  );
}

export default App;
