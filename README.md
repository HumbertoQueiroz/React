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
Executar: 'npm create vite@latest'<br>
Depois: 'y'<br>
Informar o nome do projeto:'name'<br>
Selecionar a bliblioteca: 'react'<br>
Selecionar se vai usar Typescrpt ou não: 'react'<br>
Pronto, projeto criado com a estrutura react.<br><br>

Abrir VS Code na pasta e executar: 'npm i'<br>
Para instalar as dependencias do projeto<br><br>

Depois com a pasta selecionada executar 'npm run dev'<br>
Para ver a palicação rodando no localhost (testar e ver a versão do projeto rodando).<br><br>

Mais informações: (site guia do Vite) [https://vitejs.dev/guide/]


## Conceitos React

### Componetes
Componentes são partes de códigos (funções que retonan código HTML) que podem ser reutilizados na aplicação, facilitando o desenvolvimento, por exemplo uma página que tem vários botões, pode ser criado um componente chamado botão com todo seu formato e estilização e toda vez que a página tiver um botão chamasse o componente, sem precisar reescrever o código.<br><br>

**Padrão de nomenclatura de componentes no React (puro) é iniciando com letra Maiúscula**

### Propriedades
Propriedades são informações que podem ser passadas para um componente, fazendo com que possa ser utilizado o mesmo componentes várias vezes mas que o conteúdo daquela propriedade seja exibido de forma diferente em cada um.<br>
Propriedades são bem parecidos com os atributos de uma tag.<br>
Um componente se parece com uma tag, exemplo uma tag img, já a propriedade se parece com o atributo src da tag img.<br>
O computador sempre tem o comportamente de exibir a imagem, mas muda a imagem exibida dependendo do conteudo do scr.<br>
Componetes e propriedades tem a mesma lógica, um componente post por exemplo sempre vai criar um parágrafo com conteúdo e autor, o que muda são os valores passados para as propriedades autor e conteúdo toda vez que o componente pe chamado.

### Estilização é importada nos componestes e não no html
Os estilos são importados `diretamente` nos componentes
#### CSS Models
 