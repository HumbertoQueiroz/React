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
Para ver a palicação rodando no localhost (testar e ver a versão do projeto rodando).<br><br>

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
Essa função recebe uma array como parametro com duas posições.<br>
O valor antigo como a primeira posição e o novo valor da variável na segunda posição.<br><br>

Para isso usamos o spread operator `...` para pegar/copiar o valor antigo na primeira posição e na segunda posição passamos a posição final mais 1 com o `.length+1`.<br>
Usado o `.length1` como exemplo, normalmnete se passa a variável com o novo valor, ou o próprio novo valor<br><br>

Exemplo: `setComments([...comments, comments.length+1])`<br>

##### Imutabilidade
Essa fução **retorna uma *nova variável* com novo valor**, ela **não** altera a anterior e simplesmente adicona o novo valor, garantindo que não ocorra erros no programa por alterar o valor de uma variável que outro programa pode acabar usando com o valor alterado (incorreto).


### Programação Declarativa
Quais as condições para ter o resultado final.<br><br>