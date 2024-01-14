import { format, formatDistanceToNow } from 'date-fns';
import ptBR from  'date-fns/locale/pt-BR';
import { Comment } from "./Comment";
import { Avatar } from "./Avatar";

import styles from './Post.module.css';

export function Post({author, publishedAt, content}) {

  /* Método mais trabalhoso
  const publishedAtDateFormatted= new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    hour:'2-digit',
    minute:'2-digit'
  }).format(publishedAt); */

  /* Método usando biblioteca date-fns mais prático */
  const publishedAtDateFormatted=format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  });

  const publishedAtDateRelativeToNow=formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  });

  return (
    <article className={styles.post}>

      <header className={styles.header}>
        <div className={styles.author}>
          <Avatar src={author.avatarURL}/>
          <div>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publishedAtDateFormatted} dateTime={publishedAt.toISOString()}>{publishedAtDateRelativeToNow}</time>
      </header>
      <div className={styles.content}>
        {content.map(item => {
          if(item.type === 'paragraph') {
            return <p> {item.content}</p>
          } else if(item.type === 'link') {
            return <p><a href='#'>{item.content}</a></p>
          }
        })}

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
