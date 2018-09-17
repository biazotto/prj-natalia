import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Switch, BrowserRouter, Route } from 'react-router-dom';


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
import NoMatch from './componentes/NoMatch';


ReactDOM.render(<BrowserRouter>
    <Switch>
    <Cabecalho />
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
        
        <Route component={NoMatch}/>
    <Rodape />
    </Switch>
</ BrowserRouter>
    , document.getElementById('root'))
registerServiceWorker();
