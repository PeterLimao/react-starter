import React from 'react'
import { Route } from 'react-router-dom'

export const routes = [
  {
    path: '/',
    exact: true,
    component: require('@/pages/main').default
  },
  {
    path: '/msg',
    component: require('@/pages/Msg').default
  },
  {
    path: '/about',
    component: require('@/pages/About').default
  }
]

export const RouteWithSubRoutes = route => (
  <Route path={route.path} exact={route.exact} render={props => (
    <route.component {...props} routes={route.routes} />
  )} />
)
