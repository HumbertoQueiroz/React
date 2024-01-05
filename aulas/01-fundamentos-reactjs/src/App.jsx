/* Importação dos componentes */
import {Post} from "./Post"
import {Header} from './components/Header'

/* Importação dos estilos CSS*/
import styles from './App.module.css';
import './global.css';
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        <Post
        autor="Humberto Caio"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt mollitia voluptates officiis aut. Vitae architecto reprehenderit, ullam repudiandae sit, quo odio minus voluptatum consectetur provident nulla corporis totam tempore mollitia"
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



