/*import {Post} from './Post'*/
import {Post} from "./Post"

import './styles.css';

export function App() {
  return (
    <div>
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
    </div>
  )

}



