import React from 'react'
import {Switch, Route} from 'react-router-dom'
import ReactDOM from "react-dom";
import {RegPage} from './pages/RegPage.js'
import {AuthPage} from './pages/AuthPage.js'

export const useRoutes = isAunthenticated => {
    if (isAunthenticated) {
        return (
            <Switch>
                <Route path="/registration" exact>
                    <RegPage/>
                </Route>
            </Switch>
        )
    }
    return (
        <Switch>
            <Route path="/" exact>
                <AuthPage/>
            </Route>
            <Route path="/registration" exact>
                <RegPage/>
            </Route>

        </Switch>
    )
}