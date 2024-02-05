# React

Este repositório tem o objetivo de ser meu local de prática, aprendizado e caderno de estudo de React

## Primeiros conceitos

### Rendering Patterns SSR e SPA

Rendering Patterns são padrões de renderização de páginas.

#### SSR

Server Sider Rendering significa que o conteúdo da página será renderizado pela Lado do servidor de forma única.<br>
O servidor tem todo o conteúdo back-end e front-end da aplicação.<br>
Ao receber uma requisição o servidor vai acessar o banco de dados, gerar o html, css e javascript da página e devolver isso para o usuário.<br>
Grande maioria da web usa SSR, como Wordpress, Ruby, Magento, Rails(github)

#### SPA

Single Page Application significa Aplicação de página única.<br>
O servidor é divido em aplicações, com responsabilidades diferentes.<br>
Ao receber uma requisição a aplicação back-end vai acessar o banco de dados e enviar um arquivo formato JSON para a aplicação front-end (podendo ter diferentes aplicação front-end para web React e mobile React Native), sendo a aplicação front-end responsável por gerar o html, css e javascript da página e devolver isso para o usuário.


## Preparando o ambiente

### Criando estrutura de pastas e arquivos para React

#### Vite

*Ter node.js instalado*

Acessar através do terminal a pasta que o projeto vai ser guardado<br>
Executar: `npm create vite@latest`<br>
Depois: `y`<br>
Informar o nome do projeto:'name'<br>
Selecionar a bliblioteca: `react`<br>
Selecionar se vai usar Typescrpt ou não: `react`<br>
Pronto, projeto criado com a estrutura react.<br><br>

Abrir VS Code na pasta e executar: `npm i`<br>
Para instalar as dependencias do projeto<br><br>

Depois com a pasta selecionada executar `npm run dev`<br>
Para ver a aplicação rodando no localhost (testar e ver a versão do projeto rodando).<br><br>

Mais informações: [site guia do Vite](https://vitejs.dev/guide/)

## Conceitos React

### Componetes

Componentes são partes de códigos (funções que retornam código HTML) que podem ser reutilizados na aplicação, facilitando o desenvolvimento, por exemplo uma página que tem vários botões, pode ser criado um componente chamado botão com todo seu formato e estilização e toda vez que a página tiver um botão chamasse o componente, sem precisar reescrever o código.<br><br>

**Padrão de nomenclatura de componentes no React (puro) é iniciando com letra Maiúscula**

### Propriedades

Propriedades são informações que podem ser passadas para um componente, fazendo com que possa ser utilizado o mesmo componentes várias vezes mas que o conteúdo daquela propriedade seja exibido de forma diferente em cada um.<br>
Propriedades são bem parecidos com os atributos de uma tag.<br>
Um componente se parece com uma tag, exemplo uma tag img, já a propriedade se parece com o atributo src da tag img.<br>
O computador sempre tem o comportamente de exibir a imagem, mas muda a imagem exibida dependendo do conteudo do scr.<br>
Componetes e propriedades tem a mesma lógica, um componente post por exemplo sempre vai criar um parágrafo com conteúdo e autor, o que muda são os valores passados para as propriedades autor e conteúdo toda vez que o componente pe chamado.

### Estilização é importada nos componestes e não no html geral/inicial

Os estilos são importados **diretamente** nos componentes<br>

**Elementos (funções que constroem/retornam html) devem iniciar nome com letra Maiúscula para não confundir com as tags nativas html**

>A class vai ser substituida por className no React.

#### CSS Models
>Obs.: O Vite já configura para dar suporte a CSS Model nativamente, não precisa de configurações a mais

Usado para que o css seja aplicado apenas para o elemento específico, não gerando conflito com outros css.<br><br>

O CSS vai ter formato `.module.css`, nas tag vai usar `className` e vai importar o arquivo .module.css direto no componete .jsx <br><br>

Dentro do .module.css vai criar as classes e dentro dela as estilizações normalmente <br><br>

Depois importar o arquivo .module.css dentro do componente .jsx e dentro da função construtora de html, no html que vai aplicar o estilo chamar `className` e aplicar o estilo usando {} <br><br>


A importação é feita: `import styles from './Exemplo.module.css` <br><br>

Para chamar a class: `<header className={styles.header}>`

### Biblioteca para manipular date

Para instalar o pacote: `npm i date-fns` <br><br>
Para importar função da data: `import { format, formatDistanceToNow } from "date-fns";` <br> <br>

Para importar formato da linguagem para pt-br: `import ptBR from  'date-fns/locale/pt-BR';` <br> <br>

Exemplo de função para formatar data: `const dataFormatada=format(exemploData, "dd 'de' LLLL 'às' HH:mm'h'", {locale: ptBR});`<br> <br>

Exemplo de função que conta o tempo da data recebida para agora: `const publishedAtDateRelativeToNow=formatDistanceToNow(publishedAt, {locale: ptBR, addSuffix: true});`<br> <br>


Documentação: [site da documentação biclioteca date-fns](https://date-fns.org/docs/Getting-Started)

### useStates

O `React` usa um modelo de controle de renderização, onde ele deve ser avisado que valores foram mudados para que ele altere o que esta sendo exibido em tela.<br><br>

`useStates` nada mais é que variáveis do componente que devem ser monitoradas<br><br>

Primeiro é necessário importar `import { useState } from 'react';` <br><br>

O método`useStates` sempre **recebe como parámetro** o *valor inicial da variável*.<br><br>

O método `useStates` sempre **retorna** um array com *duas posições*.<br>
Na primeira retorna o valor (status) inicial da variável.<br>
Na segunda retorna uma função para alterar o valor da variável.<br><br>

**Sempre deve ser usado a própria função nativa do useStates para alterar o valor da variável**<br>
Pois além  dela alterar o valor da variável, ela também *informa ao React que o componente que tem a variável alterada deve ser renderizado novamente na tela*<br><br>

Como sabemos o tipo de retorno, uma lista com duas posições: [valor inicial, função de alteração]<br>
O retorno pode ser deestruturado para duas variáveis, o valor inicial (no exemplo comments) que vai ser usado para chamado e exibir o valor da variável na tela e a função de alteração do valor da variável que será chamada quando precisar alterar o valor (no exemplo setComments) <br><br>

Exemplo `const [comments, setComments] = useState ([1,2])` <br><br>

#### Função set (de alteração da variável) nativa do useStates

Essa função altera o valor do estado atual (useStates).<br><br>

Pode ser passado *diretamente o novo valor* (alterar um comentário existente) ou caso queira simplesmente adicionar mais um valor a um array já existente (exemplo adicionar um novo commentário) pode ser usado desconstrução para pegar os valores antigos e retornar eles mais um ou caso queira deletar pode ser usado um filter (exemplo deletar um comentário).<br><br>

##### Passando direto um novo valor:

`setComments(5)`<br>
Quando for necessário saber o valor antigo para retornar o novo (exemplo número de likes) o ideal é usar uma função para pegar o valor atual, pois devido ao método de processamente do React alterações simultaneas do mesmo estado dentro da mesma função não funcionam<br><br>

>Correto
```js
function handleLikeComment(){
    setLikeCount((state)=>{
      return state+1
    })
     setLikeCount((state)=>{
      return state+1
    })
  }
```
Retorno com valor inicial 0: 2
<br>

>Incorreto
```js
function handleLikeComment(){
  setLikeCount(likeConter+1)
  setLikeCount(likeConter+1)
}
```
Retorno com valor inicial 0: 1<br><br>

##### Adicionando um novo item a um array

Neste caso a função `set` recebe um array como parametro com duas posições.<br><br>

Uma cópia do valor antigo como a primeira posição e o novo valor da variável na segunda posição.<br><br>

Para isso usamos o spread operator `...` para pegar/copiar o valor antigo na primeira posição e na segunda posição passamos a posição final mais 1 com o `.length+1`.<br><br>

Exemplo: `setComments([...comments, comments.length+1])`<br><br>

>Usado o `.length1` como exemplo, normalmnete se passa a variável com o novo valor, ou o próprio novo valor<br><br>

Neste caso vamos passar um valor novo comentário aos existentes armazenados em um array.

```js
const newCommentText='Usar o React é muito legal, principalmente porque tem esses carderno de estudo para consultar quando tenho dúvidas'
function handleNewComment(){
   setComments([...comments, newCommentText])
}
```

##### Deletando um item do array

Neste caso podemos pegar o valor antigo e usar usar um filtro e retornar tudo que for diferente do valor que será deletado para o novo estado.<br><br>

```js
function deleteComment(commentToDelete){
    const commentsWithoutDeletedOne= comments.filter((comment)=>{
      return comment !== commentToDelete
    })
    setComments(commentsWithoutDeletedOne)
  }
```

### Imutabilidade

Dentro do React usamos o conceito imutabilidade, isso significa que as funções `set` sempre **retornam uma *nova variável* com novo valor**, ela **não** altera a anterior e simplesmente adicona ou remove o novo valor, garantindo que não ocorra erros no programa por alterar o valor de uma variável que outro programa pode acabar usando com o valor alterado (incorreto) e isso é bem mais performático computacionalmente para o React.

### Programação Declarativa

No react se constuma usar a programação declarativa.<br>
Neste tipo de programação é informado quais as condições para ter o resultado final.<br>
Não se altera um valor de uma variável diretamente, mas sim se define o valor dela para ser igual a um estado (useState) e quando necessário altera o valor do estado, assim independente de onde se alterar o valor do estado isso reflete no valor da variável, evitando erros futuros.<br><br>

### Keys

Quando executar um `.map` para renderizar algo na tela será necessário passar uma propriedade chamada `key` com um id único para cada item, normalmente um `id` recebido, **não utilizar *index* de um array** pois isso pode gerar demora na renderização.<br>

#### Renderização

3 momentos em que um componente é renderizado:<br>
1. Quando o estado (useStates) é alterado<br>
2. Quando a propriedade é alterada<br>
3. Quando o componente pai é alterado<br>

A utilização das keys facilita a renderização, o React analisa as keys e renderiza apenas o que ainda não foi renderizado

### Passando 'valores' entre componentes

O **único** meio de passar valores, de ter comunicação entre os componentes é através das **propriedades**.<br><br>

#### Como usar um eventeo em um compenete para acinar comportamentos em outro componente

Passando uma função (que manipula) do componente que terá alteração para o componente que gerará o evento como propriedade.

## Typescript

Nasceu como um superset (conjunto de ferramentes) de JS, para usar tipagem forte nas propriedades que as funcções recebem e auto-inteligencia para ajudar no desenvolvimento dentro do VS Code, atualmente alguns já consideram como uma linguaguem de programação.<br>

>Quando o Typescript reclamar que uma propriedade pode não existir, mas que eu garanto manualmente que existte, pode usar ! depois da propriedade, exemplo:

```js
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

### definindo o tipo de uma propriedade direto na função

```js
function teste (prop:string){}
```

### interface

É usado quando se recebe mais de uma propriedade com desestruturação, podendo ser de tipos diferentes
>Lembrando que o nome dentro da interface tem que ser igual ao nome da propriedade desestruturada dentro da função

```js
interface Props {
  prop1: string;
  prop2: boolean;
  prop3: Date;

}
function teste ({prop1, prop2, prop3}:Props){}
```

### Definindo uma propriedade como opecional

Para definir uma propriedade como opcional, podendo passar ou não para a função, pode usar o `?` após o nome da propriedade, exemplo:

```js
interface Props {
  prop1: string;
  prop2?: boolean;
  prop3?: Date;

}
function teste ({prop1}:Props){}
```

### propriedades com propriedades dentro

Quando passa como propriedade um objeto que um de seus parametros é outro objetos com seus próprios typos, pode se ter um interface dentro de outro, garantindo que foi definido todos o tipo de todas as propriedades.

```js
const propsTest={
  name: 'Humberto',
  idade: 2000-01-01,
  endereco: {
    temEndereco: true,
    rua: 'avenida imaginária',
    numero: 2024,
    cidade: 'Curitiba'
 }
}

interface usuario {
  name: string,
  idade: Date,
  //Aqui defino a variavel endereço do tipo Endereco com todos os tipos de variaveis que tem dentro
  //sem isso da erro
  endereco: Endereco
}

interface Endereco {
  temEndereco: boolean;
  rua: string;
  numero: number;
  cidade: string;

}
function teste ({propsTeste:usuario}){}
```

### Recebendo array de propriedades

Neste caso vamos usar `[]` após a propriedade.<br>
Se o array estiver dentro do objeto recebido a interface recebe o `[]`, mas se a propriedade recebida for um array, de string por exemplo, pode ser passado direto na função o tipo e o `[]`.<br><br>

Objeto com array dentro:

```js
const propsTest={text:['teste01','teste02','teste03']};

interface PropsTest {
  text: string[];
}

function imprime(props:PropsTeste){
  props.text.forEach((e)=>console.log(e))
}
```

Ou diretamente na função

```js
const propsTest=['teste01','teste02','teste03'];

function imprime(props:string[]){
  props.forEach((e)=>console.log(e))
}
```

### Permitindo que os componentes criados possam receber propriedades não criadas manualmente, mas que são padrões de uma tag HTML

Para um componete que *retornar apenas uma tag HTML*.

#### Extendendo as propriedades de uma tag do HTML

Para não ter que escrever manualmente todas as propriedades que um componente pode receber quando estamos utilizabdo do Typescrpt, podemos `extend` (extender) as propriedades de uma tag HTML.<br><br>

Exemplo: Um componete `Avatar` que é basicamente uma imagem, normalmente teria que passar todas a propriedades que quero utilizar que são iguais a da tag img do HTML.<br><br>

Neste caso para facilitar posso usar `extend` para extender todas as propriedade de uma tag HTML, primeiro preciso informar de qual tag as propriedades serão extendidas, neste casi sera de uma tag img, para isso informo o `ImgHTMLAttributes` que é a interface que tem todas as propriedades de uma tag img HTML e tem que passar *obrigatoriamente* dentro de `< >` o elemento que, neste caso como o elemento que esta sendo retornado dentro do componente é uma tag img, deve informar `HTMLImageElement`<br><br>

Fazendo isso, pode chamar as propriedades nativas da tag (img neste caso) direto na função e usar sem dar erro.

>Lembrando que extender as propriedades de uma tag HTML não impede de usar minhas proprias propriedades como a `hasBorder` no exemplo abaixo:

```js
interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>{
  hasBorder?: boolean;
}

function Avatar({ hasBorder=true, src, alt}:AvatarProps){
  return (
    <img
      className={hasBorder? styles.avatarWithBorder : styles.avatar}
      src={src}
      alt={alt}
    />
  )
}
```

> Necessário importar a interface no início do documento: `import { ImgHTMLAttributes } from 'react';`<br>

Esse método deixa desestruturar as propriedades nos perametros da função, mas tem um defeito, tem que ser feito manualmente a chamada de toda propriedade, ou seja, apesar de ter extendido todas as propriedades da tag img HTML, se for passado uma propriedade na chamada do componente que eu não desestruturei manualmente ela não sera usada/renderizada.<br>
Exemplo: A propriedade `title` no exemplo a seguir não será renderizada, apenas as src e alt pois na função Avatar do exemplo anterior não foi desestruturada a propriedade `title`.

```js
< Avatar src='http:teste-Renderiza'  alt='Renderiza' title='Não é renderizado/usado pois não foi desestruturado na função Avatar do exemplo anterior'/>
```

#### Facilitando a utilização de extenção de propriedades - Resolvendo defeito de chamar propriedades de forma manual

Para facilitar a chamada de propriedades extendidas de uma tag HTML (que podem ou não ser passadas e que também podem ser muitas), podemos usar `...` que é um `rest operator`, que significa resto das propriedades.<br>
Nesta caso foi desestrutorado a propriedade que eu criei (não é nativo da tag img) e foi pegado o resto das propriedades passadas (caso tenha) e guardadas dentro do objeto `props` que foi criado com: `...props`.<br><br>

Essas propriedades guardadas dentro do objeto `props` podem ser chamadas todas de uma vez dentro do elemento usando `...` que neste momento dentro do elemento funcina como um `spread Operator`, que vai pegar todas as propriedades guardadas dentro do  objeto `props` e vai separa-las e exibi-las com: `{...props}`<br><br>

Exemplo:

```js
function Avatar({ hasBorder=true, ...props }:AvatarProps){
  return (
    <img
      className={hasBorder? styles.avatarWithBorder : styles.avatar}
      {...props}
    />
  )
}
```
