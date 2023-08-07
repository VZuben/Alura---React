import listaAnimes from 'data/listaAnimes.json';
import Anime from './Anime';
import styles from './Animes.module.scss';
import { useEffect, useState } from 'react';

interface Props {
    busca: string;
    filtro: number | null;
}


export default function Animes(props: Props) {
  const [ catalogo, setCatalogo ] = useState(listaAnimes);
  const { busca, filtro } = props;

  function testaBusca(title: string) {
    const regex = new RegExp(busca, 'i');
    return regex.test(title);
  }
    
  function testaFiltro(id: number) {
    if(filtro !== null) return filtro === id;
    return true;
  }

  useEffect(() => {
    const novoCatalogo = listaAnimes.filter(anime => testaBusca(anime.title) && 
        testaFiltro(anime.category.id));
    setCatalogo(novoCatalogo);
  },[busca, filtro]);

  return (
    <div className={styles.animes}>
      {catalogo.map(anime => (
        <div key={anime.id}>
          <Anime {...anime}/>
        </div>
      ))}
    </div>
  );    
}