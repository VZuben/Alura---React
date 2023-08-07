import styles from './Anime.module.scss'
import listaAnimes from '../animes.json'
import classNames from 'classnames';

type Props = typeof listaAnimes[0];

export default function Anime(props: Props) {
    const { title, description, category, photo } = props;
    return (
      <div className={styles.anime}>
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
              [styles[`anime__tipo__${category.label2}`]]: true
            })}>{category.label}</div>
          </div>
        </div>
      </div>
    );
  }