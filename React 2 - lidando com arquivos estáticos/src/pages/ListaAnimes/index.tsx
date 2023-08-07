import styles from "./ListaAnimes.module.scss";
import { ReactComponent as Logo } from "assets/logo.svg";
import Buscador from "./Buscador";
import { useState } from "react";
import Filtros from "./Filtros";
import Animes from './Animes'

export default function ListaAnimes() {
  const [busca, setBusca] = useState("");
  const [filtro, setFiltro] = useState<number | null>(null);
  return (
    <main>
      <section className={styles.ListaAnimes}>
        <Logo />
        <div className={styles.ListaAnimes__buscador}>
          <Buscador busca={busca} setBusca={setBusca} />
        </div>
        <div className={styles.ListaAnimes__filtros}>
          <Filtros filtro={filtro} setFiltro={setFiltro} />
        </div>
        <Animes busca={busca} filtro={filtro} /> 
      </section>
    </main>
  )
}