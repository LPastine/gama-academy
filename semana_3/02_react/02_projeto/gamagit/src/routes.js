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

