import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {regPage} from './pages/RegPage.js'
import {AuthPage} from './pages/AuthPage.js'

export const useRoutes = isAunthenticated => {
    if(isAunthenticated){
        return (
            <Switch>
                <Route path="/registration" exact>
                    <regPage />
                </Route>
            </Switch>
        )
    }
    return (
        <Switch>
            <Route path="/" exact>
                <AuthPage />
            </Route>
        </Switch>
    )
}