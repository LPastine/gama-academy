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
      return repositoriesName.push(repository.name)
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