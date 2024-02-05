import styles from './Comment.module.css'

import { Avatar } from './Avatar'
import {Trash, ThumbsUp} from "@phosphor-icons/react"
import { useState } from 'react'


interface CommentProps{
  content : string;
  onDeleteComment: (comment:string)=> void;
}
export function Comment({content, onDeleteComment}:CommentProps){

  const [ likeCount, setLikeCount ]=useState(0)

  function handleDeleteComment(){
    onDeleteComment(content)
  }

  function handleLikeComment(){
    setLikeCount((state)=>{
      return state+1
    })
  }

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://avatars.githubusercontent.com/u/90359980?s=400&u=5d13a4166f9f4e41695c50e4e68f9fa68b435408&v=4"
        alt=""
        
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Humberto</strong>
              <time title='13 de Janeiro de 2024' dateTime='2024-01-13 08:13:30'>Cerca de 1h atrás</time>
            </div>
            <button onClick={handleDeleteComment} title='Deletar Comentário'>
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp/>
          Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
        </div>
      </div>
    </div>
  )
}
