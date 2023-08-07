import listaAnimes from 'data/listaAnimes.json';
import styles from './Anime.module.scss';
import stylesAnimeTipoCor from 'styles/AnimeTipoCor.module.scss';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

type Props = typeof listaAnimes[0];

export default function Anime(props: Props) {
  const { title2, title, description, category, photo } = props;
  const navigate = useNavigate();
  return (
    <div className={styles.anime} onClick={() => navigate(`/anime/${title2}`)}>
      <div className={styles.anime__imagem}>
        <img src={photo} alt={title} />
      </div>
      <div className={styles.anime__descricao}>
        <div className={styles.anime__titulo}>
          <h2> {title} </h2>
          <p> {description} </p>
        </div>
        <div className={styles.anime__tags}>
          <div className={classNames({
            [styles.anime__tipo]: true,
            [stylesAnimeTipoCor[`${category.label2}`]]: true
          })}>{category.label}</div>
        </div>
      </div>
    </div>
  );
}