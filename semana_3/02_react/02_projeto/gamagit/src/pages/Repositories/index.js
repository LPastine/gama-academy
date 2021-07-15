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
            <S.LinkHome to="/">Voltar</S.LinkHome>
        </S.Container>
    )
}

export default Repositories
