/// <reference path="../typings/index.d.ts" />
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Route, Router, hashHistory } from 'react-router'
import { Provider } from 'react-redux'
import { initStore } from "../common/utils/ReduxUtil"
import AppContext from '../services/AppContext'


function getIndexRoute(partialNextState, callback) {
    partialNextState.location.pathname == '/' && (partialNextState.location.pathname = '')
    callback(null, { onEnter: (next, replace) => replace(partialNextState.location.pathname + '/index') });
}

const rootRoutes = {
    component: 'div',
    path: '/',
    getIndexRoute: getIndexRoute,
    childRoutes: [
        {
            path: "index",
            getComponents(nextState, callback) {
                require.ensure([], function (require) {
                    callback(null, require("../pages/App").default)
                })
            }
        },

    ]
}

var store = initStore({});
AppContext.getInstance().setStore(store)
AppContext.getInstance().initContext()


ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory} routes={rootRoutes} />
    </Provider>,
    document.getElementById('app')
)

