import { format, formatDistanceToNow } from 'date-fns';
import ptBR from  'date-fns/locale/pt-BR';
import { Comment } from "./Comment";
import { Avatar } from "./Avatar";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

import styles from './Post.module.css';

interface Author{
  name:string;
  role: string;
  avatarURL: string
}

interface Content{
  type:'paragraph'|'link'
  content: string
}

interface PostProps{
  author: Author;
  publishedAt: Date;
  content: Content[];
}

export function Post({author, publishedAt, content}:PostProps) {

  /* useStates sempre retorna um array com duas posições
    Na primeira é o status (valor) inicial da variável.
    No segundo parametro recebe uma função para alterar o valor da variável.
    Como sabemos o retorno, pode ser destrutuado para duas variáveis
    Exemplo `const [comments, setComments] = useState ([1,2])`
    **Deve ser usado a própria função nativa do React para alterar**, pois além
    dela alterar o valor da variável, ela também informar ao React que aquele
    componente foi alterado e que deve ser renderizado novamente na tela*/
    const [comments, setComments] = useState (
      [
        'Post muito bacana',
      ]
    )

    const [newCommentText, setNewCommentText]=useState('')




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

  function handleCreateNewComment(event:FormEvent){
    /* Usa `event.preventDefault para evitar comportamento padrão do submit de
    ir para outra página de forma automática */
    event.preventDefault();

    /* Função nativa do useStates de alteração da variável
    Imutabilidade: Essa fução recebe o valor antigo como a primeira posição,
    mais o novo valor da variável na segunda posição, não apenas o valor alterado.
    Para isso usamos o spread operator `...` para pegar/copiar o valor antigo
    na primeira posição e na segunda posição passamos a posição final mais um
    com o `.length+1`
    */
    setComments([...comments, newCommentText])

    /*volta o valor da textarea para '' */
    setNewCommentText('')


  }

  function handleNewCommentChange(event:ChangeEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }

  function handleNewCommentInvalid(event:InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity('Esse campo é obrigatório')
  }

  function deleteComment(commentToDelete: string){
    const commentsWithoutDeletedOne= comments.filter((comment)=>{
      return comment !== commentToDelete
    })
    setComments(commentsWithoutDeletedOne)
  }

  const isNewCommentEmpty=newCommentText.length===0

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
            return <p key={item.content}> {item.content}</p>
          } else if(item.type === 'link') {
            return <p key={item.content}><a href='#'>{item.content}</a></p>
          }
        })}

      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          name='comment'
          placeholder='Deixe seu comentário!'
          value={newCommentText}
          /* propriedade onChange monitora o conteúdo e toda vez que tem alteração chama a função */
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map(comment =>{
          return <Comment key={comment} content={comment} onDeleteComment={deleteComment} />
          })}
      </div>



    </article>
  )
}
