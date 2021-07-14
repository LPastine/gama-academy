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

> App.js

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

## Controlar o estado do App.js

- Importar useState Hook
- Declarar o estado 'usuario', vazio como default
- Adicionar onChange ao input tag para alterar o estado do 'usuario'.
- Direcionar as alterações da input tag ao estado.

> App.js

```js
import React, { useState } from 'react'

function App() {
  const [usuario, setUsuario] = useState('')
  return (
    <>
      <input
        className='usuarioInput'
        placeholder='Usuário'
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
      />
      <button type='button'>Pesquisar</button>
    </>
  )
}

export default App
```

## Fazer com que o search button pegue os dados da API do GitHub

- Instalar axios

> gamagit

```zsh
npm i axios
```

- Importar axios a App.js e fazer o GET request à API quando clickar no botão com o valor de usuario

> App.js

```js
import React, { useState } from 'react'
import axios from 'axios'

function App() {
  const [usuario, setUsuario] = useState('')

  const handlePesquisa = async () => {
    const res = await axios.get(`https://api.github.com/users/${usuario}/repos`)
    console.log(res.data)
  }
  return (
    <>
      <input
        className='usuarioInput'
        placeholder='Usuário'
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
      />
      <button type='button' onClick={handlePesquisa}>
        Pesquisar
      </button>
    </>
  )
}

export default App
```

## Criar componente para expor os repositories (Repositories.js)

- Importar react
- Criar o componente

- Instalar react-router-dom para fazer o roteamento entre componentes

```zsh
npm install react-router-dom
```

- Criar routes.js para manipular as rotas
- Criar um react arrow function component 'Route'
- Importar Switch, Route, BrowserRouter de react-router-dom

> routes.js

```js
import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import Repositories from './Repositories'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/repositories' component={Repositories} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
```

## Configurar rotas

- Criar um Home.js component para levar tudo que foi feito no App.js
- Deixar o App.js básico
- Importar Routes component

> App.js

```js
import React from 'react'
import Routes from './routes'

function App() {
  return <Routes />
}

export default App
```

- Configurar o Routes component
