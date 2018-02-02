/// <reference path="../typings/index.d.ts" />
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Route, Router, hashHistory } from 'react-router'
import { Provider } from 'react-redux'
import { initStore } from "../common/utils/ReduxUtil"
import AppContext from '../services/AppContext'


function getIndexRoute(partialNextState, callback) {
    partialNextState.location.pathname == '/' && (partialNextState.location.pathname = '')
    callback(null, { onEnter: (next, replace) => replace(partialNextState.location.pathname + '/score') });
}

const rootRoutes = {
    component: 'div',
    path: '/',
    getIndexRoute: getIndexRoute,
    childRoutes: [
        {
            path: "score",
            component: require("../pages/App").default,
            childRoutes: [
                {
                    path: 'basic',
                    component: require('../pages/BasicAnalysis/BasicAnalysis').default
                },
                {
                    path: 'increment',
                    component: require('../pages/IncrementAnalysis/IncrementAnalysis').default
                },
                {
                    path:'map',
                    component: require('../pages/MapAnalysis/MapAnalysis').default
                }
            ]
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

