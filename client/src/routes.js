import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {regPage} from './pages/1.js'

export const useRoutes = isAunthenticated => {
    if(isAunthenticated){
        return (
            <Switch>
                <Route path="/regPage">
                    <regPage />
                </Route>
            </Switch>
        )
    }
    return (
        <Switch>
            <Route path="/" exact>
                <regPage />
            </Route>
        </Switch>
    )
}