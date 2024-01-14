/* Importação dos componentes */
import {Post} from "./components/Post"
import {Header} from './components/Header'
import { Sidebar } from "./components/Sidebar";



/* Importação dos estilos CSS*/
import styles from './App.module.css';
import './global.css';


export function App() {
  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        <Post
        autor="Humberto"
        descritionAutor="Web Developer"
        publication="Públicado há 1h"
        />
      
        <Post
          autor="John Doe"
        />
        <Post
          content="Teste só com uma propriedade"
        />
        </main>
      </div>
    </div>
  )

}



