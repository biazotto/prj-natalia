import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';


import Rodape from './componentes/Rodape'
import Cabecalho from './componentes/cabecalho'
import Inicio from './componentes/inicio'
import About from './componentes/about'
import Portfolio from './componentes/portfolio'
import Teste from './componentes/Teste'
import Contato from './componentes/contato'
import Projeto from './componentes/Projeto'
import Foto from './componentes/Foto'
import semFoto from './componentes/semFoto'
// Painel admin
import Admin from './admin/admin'
import Login from './admin/login';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          

          <Route path='/' exact component={Foto} />
          <Route path='/' exact component={Inicio} />
          <Route path='/' exact component={About} />

          <Route path='/portfolio' component={semFoto} />
          <Route path='/portfolio' component={Portfolio} />

          <Route path='/teste' component={semFoto} />
          <Route path='/teste' component={Teste} />

          <Route path='/contato' component={semFoto} />
          <Route path='/contato' component={Contato} />

          <Route path='/admin' component={semFoto} />
          <Route path='/admin' component={Admin} />
          
          <Route path='/projeto' component={semFoto} />
          <Route path='/projeto' component={Projeto} />

          <Route path='/login' component={semFoto} />
          <Route path='/login' component={Login} />



          <Rodape />

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
