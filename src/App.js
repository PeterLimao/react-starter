import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'
import { routes, RouteWithSubRoutes } from '@/routes'

ReactDOM.render(
  <Router>
    <div>
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
    </div>
  </Router>,
  document.getElementById('root'))
