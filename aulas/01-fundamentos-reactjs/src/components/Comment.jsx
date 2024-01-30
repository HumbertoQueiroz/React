import styles from './Comment.module.css'

import { Avatar } from './Avatar'
import {Trash, ThumbsUp} from "@phosphor-icons/react"

export function Comment({content}){
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/90359980?s=400&u=5d13a4166f9f4e41695c50e4e68f9fa68b435408&v=4" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Humberto</strong>
              <time title='13 de Janeiro de 2024' dateTime='2024-01-13 08:13:30'>Cerca de 1h atrás</time>
            </div>
            <button title='Deletar Comentário'>
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        <footer>
          <button>
            <ThumbsUp/>
          Aplaudir <span>20</span>
          </button>
        </footer>
        </div>
      </div>
    </div>
  )
}
