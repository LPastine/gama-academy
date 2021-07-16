import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const Home = () => {
    function print() {
        var Estado;
        (function (Estado) {
            Estado[Estado["SP"] = 0] = "SP";
            Estado[Estado["SC"] = 1] = "SC";
            Estado[Estado["SE"] = 2] = "SE";
        })(Estado || (Estado = {}));
        var uf = Estado[3];
        console.log(uf);
    }
    print();
    const [ usuario, setUsuario ] = useState('')

    const history = useHistory()

    const handlePesquisa = async () => {
        try {
            const res = await axios.get(`https://api.github.com/users/${usuario}/repos`)
            const repositories = res.data
            const repositoriesName = []
            repositories.map((repository) => {
                repositoriesName.push(repository.name)
                return repositoriesName
            })
            localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName))
            history.push('/repositories')
        } catch (error) {
            // Handle error
            console.log('User not found');
        }
    }
    return (
        <>
            <input 
                className='usuarioInput' 
                placeholder='Usuário' 
                value={usuario} 
                onChange={(e) => setUsuario(e.target.value)} />
            <button type='button' onClick={handlePesquisa}>Pesquisar</button>
        </>
    )
}

export default Home