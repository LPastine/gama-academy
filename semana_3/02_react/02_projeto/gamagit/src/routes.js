import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import App from './pages/Home'
import Repositories from './pages/Repositories'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' component={App} exact />
                <Route path='/repositories' component={Repositories} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes

