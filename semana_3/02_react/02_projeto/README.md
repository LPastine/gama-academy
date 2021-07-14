# GamaGit

Esse é um projeto que tem como fim procurar os repositórios publicados por usuários do GitHub.

## Preparando o ambiente

Instalar:

- NodeJS
- NPM
- Yarn
- VS Code
- Hype

Criar projeto

```zsh
npx create-react-app gamagit
```

Entrar no projeto, correr o servidor

```zsh
cd gamagit
npm start
```

## Limpar Projeto

- Eliminar todos os arquivos que não servem (Ficar no src com App.js e index.js, além de arquivos de configuração)

> App.js

```js
import React from 'react'

function App() {
  return (
    <>
      <h1>GamaGit</h1>
    </>
  )
}

export default App
```

> index.js

```js
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(<App />, document.getElementById('root'))
```

## Montar searchbar base do projeto

- Retornar um input tag desde o App para inserir o nome do usuário a ser procurado no GitHub
- Adicionar um button para pesquisar o usuário

```js
import React from 'react'

function App() {
  return (
    <>
      <input
        name='usuario'
        id='usuario'
        className='usuarioInput'
        placeholder='Usuário'
      />
      <button type='button'>Pesquisar</button>
    </>
  )
}

export default App
```
