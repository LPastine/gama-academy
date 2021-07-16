# Prática para prova técnica 3 - React/TS

Vou refazer o projeto GamaGit por conta própria, me baseando nas minha anotações e reforzando o aprendizado.

## Instruções

## 00 Preparar o ambiente

Instalar:

- NodeJS
- NPM
- Yarn
- VS Code
- Hype (optional)

## Criação e limpeza do projeto

- Criar projeto
- Limpar projeto e arquivos
- Entrar no projeto, correr o servidor

## Organizar código em pastas

- Criar pasta components em src
- Criar pasta pages em src
- Pasta Home e Repositories dentro da pasta pages
- Criar um index.js dentro de cada pasta

## Instalar dependencies

- Instalar react-router-dom para fazer o roteamento entre componentes
- Instalar axios
- Instalar styled components

## Fazer roteamento em routes.js

- Criar routes.js para manipular as rotas
- Criar um react arrow function component 'Routes'
- Importar Switch, Route, BrowserRouter de react-router-dom
- Importar pages e criar os paths (Estrutura => (BrowserRouter - Switch - Route(path, component, exact)))

## Configurar rotas

- Deixar o App.js básico
- Importar Routes component
- Configurar o Routes component
- O App deve retornar o Routes component

## Montar searchbar base do projeto

- Retornar um input tag desde o Home para inserir o nome do usuário a ser procurado no GitHub
- input (className, placeholder)
- Adicionar um button para pesquisar o usuário
- button (type, (Pesquisar))

## Controlar o estado do Home.js

- Importar useState Hook
- Declarar o estado 'usuario', vazio como default
- Adicionar value e onChange ao input tag para alterar o estado do 'usuario'.
- Direcionar as alterações da input tag ao estado.

## Adicionar funcionalidade ao searchbutton

- Importar axios a App.js e fazer o GET request à API quando clickar no botão com o valor de usuario
- Adicionar um parametro onClick ao button
- Lhe atribuir um handler "handlePesquisa"
- Construir o handler com a funcionalidade usando axios
- Almacenar os dados da response em uma variável repositories
- Criar um array vazio onde vão ser almacenados os nomes dos repositories
- Mapear os repositories e almacenar o nome do repository dentro do array
- Salvar o array em LS, lembrar-se de transformar para formato String
- Adicionar funcionalidade de mudar as páginas com react-router-dom
- Importar e usar useHistory hook
- Adicionar um push history ao botão de Pesquisar depois de ter salvo os dados em LS

## Display os resultados na page de repositories

- Importar e usar o useState Hook
- Criar um estado para repositories que seja inicialmente um array vazio
- Importar e usar o useEffect Hook 
- Pegar os dados do LS e os salvar em uma variável repositoriesName
- Parsear os elementos e os salvar dentro da variável
- Chamar a função do estado de repositories para que receba esses elementos
- Limpar o LS depois disso
- Criar Container, Title, List e ListItem styled components
- Criar uma lista com uma lógica para mapear os elementos do estado repositories e retorne dentro de um ListItem

