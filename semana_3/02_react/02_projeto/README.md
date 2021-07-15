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

> routes.js

```js
import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Home from './Home'
import Repositories from './Repositories'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/repositories' component={Repositories} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
```

## Organizar código em pastas

- Criar pasta components
- Criar pasta pages
- Pasta Home e Repositories dentro da pasta pages
- Mover o Home.js e Repositories.js em cada pasta e trocar o seu nome para index.js

## Styled components

- Instalar styled components

```zsh
npm install styled-components
```

- Criar arquivo styled.js no Repositories para estilar o componente

> Repositories/styled.js

```js
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 991px;
  margin: 0 auto;
`

export const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-family: sans-serif;
  color: #333;
`

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-family: sans-serif;
`

export const ListItem = styled.li`
  margin: 0.5rem 0;
  background: #000;
  color: #fff;
  padding: 0.5rem;
`
```

- Importar o styled component ao Repositories/index.js para estilar o componente

> Repositories/index.js

```js
import React from 'react'
import * as S from './styled'

const Repositories = () => {
  return <S.Title>Repositories</S.Title>
}

export default Repositories
```

- Criar arquivo styled.js no Home para estilar o componente

> Home/styled.js

```js
import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Input = styled.input`
  border: 1px solid #ddd;
  height: 1.5rem;
  padding: 0 0.5rem;
  border-radius: 0.25rem;

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`

export const Button = styled.button`
    height: 1.5rem;
    border: 1px solid #000;
    background: #000;
    color: #fff;
    border-radius: 0 .25rem .25rem 0;

    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
`
```

- Adicionar esses estilos ao Home component

```js
import React, { useState } from 'react'
import axios from 'axios'
import * as S from './styled'

function App() {
  const [usuario, setUsuario] = useState('')

  const handlePesquisa = async () => {
    const res = await axios.get(`https://api.github.com/users/${usuario}/repos`)
    console.log(res.data)
  }
  return (
    <S.Container>
      <S.Input
        className='usuarioInput'
        placeholder='Usuário'
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
      />
      <S.Button type='button' onClick={handlePesquisa}>
        Pesquisar
      </S.Button>
    </S.Container>
  )
}

export default App
```

- Criar style.css para estilar o App.js da root

> style.css

```css
html,
body {
  width: 100vw;
  height: 100vh;
}
```

## Adicionar os repositories do GitHub ao LS

- Almacenar os dados da response em uma variável repositories
- Criar um array vazio onde vão ser almacenados os nomes dos repositories
- Mapear os repositories e almacenar o nome do repository dentro do array
- Salvar o array em LS, lembrar-se de transformar para formato String

> Home/index.js

```js
import React, { useState } from 'react'
import axios from 'axios'
import * as S from './styled'

function App() {
  const [ usuario, setUsuario ] = useState('')
  
  const handlePesquisa = async () => {
    const res = await axios.get(`https://api.github.com/users/${usuario}/repos`)
    const repositories = res.data
    const repositoriesName = []
    repositories.map((repository) => {
      repositoriesName.push(repository.name)
    })
    localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName))
  }
  return (
    <S.Container>
      <S.Input className="usuarioInput" placeholder="Usuário" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
      <S.Button 
        type="button"
        onClick={handlePesquisa}
      >Pesquisar</S.Button>
    </S.Container>
  );
}

export default App;
```

## Adicionar funcionalidade de mudar as páginas com react-router-dom

- Importar e usar useHistory hook
- Adicionar um push history ao botão de Pesquisar depois de ter salvo os dados em LS

>Home/index.js

```js
import React, { useState } from 'react'
import axios from 'axios'
import * as S from './styled'
import { useHistory } from 'react-router-dom'

function App() {
  const history = useHistory()

  const [ usuario, setUsuario ] = useState('')
  
  const handlePesquisa = async () => {
    const res = await axios.get(`https://api.github.com/users/${usuario}/repos`)
    const repositories = res.data
    const repositoriesName = []
    repositories.map((repository) => {
      repositoriesName.push(repository.name)
    })
    localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName))
    history.push('/repositories')
  }
  return (
    <S.Container>
      <S.Input className="usuarioInput" placeholder="Usuário" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
      <S.Button 
        type="button"
        onClick={handlePesquisa}
      >Pesquisar</S.Button>
    </S.Container>
  );
}

export default App;
```

## Display os resultados na page de repositories

### useEffect Hook

Fica monitorando uma mudança de uma variável e vai disparar uma função quando essa variável for alterada.

- Importar e usar o useState Hook
- Criar um estado para repositories que seja inicialmente um array vazio
- Importar e usar o useEffect Hook 
- Pegar os dados do LS e os salvar em uma variável repositoriesName
- Parsear os elementos e os salvar dentro da variável
- Chamar a função do estado de repositories para que receba esses elementos
- Limpar o LS depois disso
- Criar uma lista com uma lógica para mapear os elementos do estado repositories e retorne dentro de um List.Item

```js
import React, { useEffect, useState} from 'react'
import * as S from './styled'

const Repositories = () => {
    const [ repositories, setRepositories ] = useState([])

    useEffect(() => {
        let repositoriesName = localStorage.getItem('repositoriesName')
        repositoriesName = JSON.parse(repositoriesName)
        setRepositories(repositoriesName)
        localStorage.clear()
    }, [])
    return (
        <S.Container>
            <S.Title>Repositories</S.Title>
            <S.List>
                { repositories.map(repository => {
                    return (
                        <S.ListItem>{ repository }</S.ListItem>
                    )
                }) }
            </S.List>
        </S.Container>
    )
}
```

## Continuar com roteamento do site

- Importar Link do react-router-dom
- Adicionar botão de voltar no Repositories

> Repositories/index.js

```js
<Link to="/">Voltar</Link>
```

- Estilizar o Link component

Devido ao fato que não se consegue estilizar um react component da mesma forma que um html tag, precisamos fazer o seguinte:

- Importar o Link component em /styled.js
- Exportar uma const LinkHome estilizada

> Repositories/styled.js

```js
export const LinkHome = styled(Link)`
    display: block;
    width: 4rem;
    text-align: center;
    margin: 2rem auto;
    background-color: #000;
    padding: .5rem 0;
    color: #fff;
    text-decoration: none;
`
```

- Importar a variável no Repositores e trocar o nome do tag

> Repositories/index.js

```js
<S.LinkHome to="/">Voltar</S.LinkHome>
```

## Tratar bugs

- Tratar bug de refresh no Repositories por causa do LS vazio
- Caso o LS esteja vazio fazer um history push para o Home
- Fazer uso do useHistory Hook

> Repositories/index.js
```js
import React, { useEffect, useState} from 'react'
import * as S from './styled'
import { useHistory } from 'react-router-dom'

const Repositories = () => {
    const history = useHistory()
    const [ repositories, setRepositories ] = useState([])

    useEffect(() => {
        let repositoriesName = localStorage.getItem('repositoriesName')
        if(repositoriesName !== null) {
            repositoriesName = JSON.parse(repositoriesName)
            setRepositories(repositoriesName)
            localStorage.clear()
        } else {
            history.push('/')
        }
    }, [history])
    return (
        <S.Container>
            <S.Title>Repositories</S.Title>
            <S.List>
                { repositories.map(repository => {
                    return (
                        <S.ListItem>{ repository }</S.ListItem>
                    )
                }) }
            </S.List>
            <S.LinkHome to="/">Voltar</S.LinkHome>
        </S.Container>
    )
}

export default Repositories
```