import React, { useState } from 'react'
import axios from 'axios'
import * as S from './styled'

function App() {
  const [ usuario, setUsuario ] = useState('')
  
  const handlePesquisa = async () => {
    const res = await axios.get(`https://api.github.com/users/${usuario}/repos`)
    console.log(res.data);
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