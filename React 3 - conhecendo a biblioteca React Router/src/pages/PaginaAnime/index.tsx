import styles from './PaginaAnime.module.scss';
import { useParams, useNavigate } from 'react-router-dom';
import stylesAnimeTipoCor from 'styles/AnimeTipoCor.module.scss';
import listaAnimes from 'data/listaAnimes.json';
import NotFound from 'pages/NotFound';
import classNames from 'classnames';


export default function PaginaAnime() {

  const { title2 } = useParams();
  const navigate = useNavigate();
  const anime = listaAnimes.find(anime => anime.title2 === title2);

  const epBar = [];
  if (anime) {
    for (let i = 0; i < anime.totalEps; i++) {
      epBar.push(
        <div className={styles.episodesList}>
          <div className={styles.episodesList__episode}>
            <h2>Episódio {i+1}</h2>
            <button>Assistir</button>
          </div>
        </div>
      );
    }
  }


  if(!anime) {
    return <NotFound/>;
  }
  return (
    <>
      {window.scrollTo(0, 0)}
      <div className={styles.container}>
        <div className={styles.voltar}>
          <button onClick={() => navigate(-1)}>
            {'< Voltar'}
          </button>
        </div>
        <div className={styles.anime}>
          <div className={styles.anime__imagem}>
            <img src={anime.photo} alt={anime.title} />
          </div>
          <div className={styles.anime__descricao}>
            <div className={styles.anime__titulo}>
              <h2> {anime.title} </h2>
              <p> {anime.description} </p>
            </div>
            <div className={styles.anime__tags}>
              <div className={classNames({
                [styles.anime__tipo]: true,
                [stylesAnimeTipoCor[`${anime.category.label2}`]]: true
              })}>{anime.category.label}</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.epBarContainer}>
        {epBar}
      </div>
    </>
  );
}