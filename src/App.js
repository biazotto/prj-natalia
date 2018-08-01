import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';


import Rodape from './componentes/Rodape'
import Cabecalho from './componentes/cabecalho'
import Inicio from './componentes/inicio'
import Servicos from './componentes/servicos'
import Portfolio from './componentes/portfolio'
import Teste from './componentes/Teste'
import Contato from './componentes/contato'
// Painel admin
import Admin from './admin/admin'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Cabecalho />

          <Route path='/' exact component = {Inicio}/>
          <Route path='/' exact component = {Portfolio}/>
          <Route path='/servicos' component = {Servicos}/>
          <Route path='/portfolio' component = {Portfolio}/>
          <Route path='/teste' component = {Teste}/>
          <Route path='/contato' component ={Contato}/>
          <Route path='/admin' component = {Admin}/>



          <Rodape />

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
