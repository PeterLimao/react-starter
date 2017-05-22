import React from 'react'
import ReactDOM from 'react-dom'
import DevTools from 'mobx-react-devtools'
import { HashRouter as Router } from 'react-router-dom'
import { routes, RouteWithSubRoutes } from '@/routes'

ReactDOM.render(
  <Router>
    <div>
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
      <DevTools />
    </div>
  </Router>,
  document.getElementById('root'))
