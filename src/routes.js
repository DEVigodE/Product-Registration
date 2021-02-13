import React from 'react'

import { HashRouter, Switch, Route } from 'react-router-dom'

import Home from './views/home';
import ProductRegister from './views/products/register'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/product-register" component={ProductRegister} />
      </Switch>
    </HashRouter>
  )
}