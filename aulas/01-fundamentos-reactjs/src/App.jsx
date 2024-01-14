/* Importação dos componentes */
import {Post} from "./components/Post"
import {Header} from './components/Header'
import { Sidebar } from "./components/Sidebar";



/* Importação dos estilos CSS*/
import styles from './App.module.css';
import './global.css';


const posts = [
  {
    id:1,
    author: {
      avatarURL: 'https://avatars.githubusercontent.com/u/90359980?s=400&u=5d13a4166f9f4e41695c50e4e68f9fa68b435408&v=4',
      name:'Humberto Queiroz',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: '👉 jane.design/doctorcare'},
      { type: 'link', content: '#novoprojeto'},
      { type: 'link', content: '#nlw'},
      { type: 'link', content:  '#rocketseat'}
    ],
    publishedAt: new Date('2024-01-14 18:00:00')
  },
  {
    id:2,
    author: {
      avatarURL: 'https://avatars.githubusercontent.com/u/123135812?v=4',
      name:'Robson',
      role: 'Hacker Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: '👉 jane.design/doctorcare'},
      { type: 'link', content: '#novoprojeto'},
      { type: 'link', content: '#nlw'},
      { type: 'link', content:  '#rocketseat'}
    ],
    publishedAt: new Date('2024-01-20 18:00:00')
  }
]


export function App() {
  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
            })}
        </main>
      </div>
    </div>
  )

}



