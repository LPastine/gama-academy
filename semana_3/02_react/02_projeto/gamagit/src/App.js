import React, { useState } from 'react'
import axios from 'axios'

function App() {
  const [ usuario, setUsuario ] = useState('')
  
  const handlePesquisa = async () => {
    const res = await axios.get(`https://api.github.com/users/${usuario}/repos`)
    console.log(res.data);
  }
  return (
    <>
      <input className="usuarioInput" placeholder="Usuário" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
      <button 
        type="button"
        onClick={handlePesquisa}
      >Pesquisar</button>
    </>
  );
}

export default App;
