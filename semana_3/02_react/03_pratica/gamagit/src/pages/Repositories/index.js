import React, { useState, useEffect } from 'react'

const Repositories = () => {
    const [repositories, setRepositories] = useState([])

    useEffect(() => {
        let repositoriesName = localStorage.getItem('repositoriesName')
        repositoriesName = JSON.parse(repositoriesName)
        setRepositories(repositoriesName)
        localStorage.clear()
    })
    return (
        <>
            <h1>Repositories</h1>
            {/* <List>
                {repositories.map((repository) => {
                    return (
                        <ListItem>{ repository }</ListItem>
                    )
                })}
            </List> */}
        </>
    )
}

export default Repositories
