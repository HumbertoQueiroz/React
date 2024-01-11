import styles from './Sidebar.module.css'

/*https://avatars.githubusercontent.com/u/90359980?s=400&u=5d13a4166f9f4e41695c50e4e68f9fa68b435408&v=4*/

/*https://images.unsplash.com/photo-1604964432806-254d07c11f32?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D*/

export function Sidebar(){
  return(
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="data:image/jpeg;base64,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"/>

      <div className={styles.profile}>
        <strong>Humberto</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          Editar seu perfil
        </a>
      </footer>

    </aside>
  )
}
