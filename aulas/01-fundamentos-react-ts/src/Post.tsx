//Uma função construtora de html pode receber parametros, neste caso 'props',
//Esses paremetros (pode ser um ou mais) são recebidos em formado de Objeto
//Exemplo:  props: {autor:"", content:"",}


export function Post(props){
    return (
      <div>
        <strong>{props.autor}</strong>
        <p>{props.content}</p>
      </div>
    )
}





/*function Post(){
    return <p>Post</p>
}
export default Post
*/
