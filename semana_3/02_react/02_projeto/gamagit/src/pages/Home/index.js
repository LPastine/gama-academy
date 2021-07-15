import React, { useState } from 'react'
import axios from 'axios'
import * as S from './styled'
import { useHistory } from 'react-router-dom'

function App() {
  const history = useHistory()

  const [ usuario, setUsuario ] = useState('')
  const [ erro, setErro ] = useState(false)
  
  const handlePesquisa = async () => {
    try {
      const res = await axios.get(`https://api.github.com/users/${usuario}/repos`)
      const repositories = res.data
      const repositoriesName = []
      repositories.map((repository) => {
        return repositoriesName.push(repository.name)
      })
      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName))
      setErro(false)
      history.push('/repositories')
    } catch (error) {
      setErro(true)
    }
  }
  return (
    <S.HomeContainer>
      <S.Content>
        <S.Input className="usuarioInput" placeholder="Usuário" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
        <S.Button 
          type="button"
          onClick={handlePesquisa}
        >Pesquisar</S.Button>
      </S.Content>
      { erro ? <S.ErrorMsg>Ocorreu um erro. Tente novamente.</S.ErrorMsg> : '' }
    </S.HomeContainer>
  );
}

export default App;