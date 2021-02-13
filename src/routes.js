import React from 'react'

import { HashRouter, Switch, Route } from 'react-router-dom'

import Home from './views/home';
import CadastroProduto from './views/produto/cadastro'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/product-register" component={CadastroProduto} />
      </Switch>
    </HashRouter>
  )
}