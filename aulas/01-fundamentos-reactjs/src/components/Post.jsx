import styles from './Post.module.css';

import { Comment } from "./Comment";

export function Post(props){
  return (
    <article className={styles.post}>

      <header className={styles.header}>
        <div className={styles.author}>
          <img src="https://avatars.githubusercontent.com/u/90359980?s=400&u=5d13a4166f9f4e41695c50e4e68f9fa68b435408&v=4" alt="" />
          <div>
            <strong>{props.autor}</strong>
            <span>{props.descritionAutor}</span>
          </div>
        </div>
        <time title='13 de Janeiro de 2024' dateTime='2022-05-11 08:13:30'>Publicado há 1h</time>
      </header>
      <div className={styles.content}>
        <p>  Fala galeraa 👋</p>
        <p>  Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>  👉 <a href='#'>jane.design/doctorcare</a></p>
        <p>  <a href='#'>#novoprojeto</a> <a href='#'>#nlw</a> <a href='#'>#rocketseat</a></p>

      </div>

      <from className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder='Deixe seu comentário!'
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </from>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>



    </article>
  )
}
