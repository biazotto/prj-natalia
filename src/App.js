import React, { Component } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';


import Rodape from './componentes/Rodape'
import Cabecalho from './componentes/cabecalho'
import Inicio from './componentes/inicio'
import About from './componentes/about'
import Portfolio from './componentes/portfolio'
import Teste from './componentes/Teste'
import Contato from './componentes/contato'
import Projeto from './componentes/Projeto'

// Painel admin
import Admin from './admin/admin'
import Login from './admin/login';
import NoMatch from './componentes/NoMatch';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Cabecalho />
          <Switch>
          <Route path='/' exact component={Inicio} />

          <Route path='/portfolio' component={Portfolio} />

          <Route path='/teste' component={Teste} />

          <Route path='/contato' component={Contato} />

          <Route path='/admin' component={Admin} />

          <Route path='/projeto/:id' exact component={Projeto} />

          <Route path='/login' component={Login} />

          <Route path='*' component={NoMatch} />
          </Switch>
          <Rodape />

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
