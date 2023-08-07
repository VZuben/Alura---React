import { IProduto } from '../../../types/produto';
import style from './Item.module.scss';

interface Props extends IProduto {
  selecionaProduto: (produtoSelecionada: IProduto) => void
  finalizarProduto: () => void
}

export default function Item(
  {
    produto,
    preco,
    selecionado,
    completado,
    id,
    selecionaProduto,
    finalizarProduto
  }: Props) {
  return (
    <li
      className={`${style.item} ${selecionado ? style.itemSelecionado : ''}`}
      onClick={() => !selecionado ? selecionaProduto(
        {
          produto,
          preco,
          selecionado,
          completado,
          id
        }
        ) : finalizarProduto()
        }
      >
      <h3>{produto}</h3>
      <span>{preco}</span>
    </li>
  )
}