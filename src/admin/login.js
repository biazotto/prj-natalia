import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import { auth } from './../fire-baseconfig'
import SemFoto from '../componentes/semFoto';

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            estaAutenticado: false,
            estaLogando: false,
            erro: false

        }

        this.email = null
        this.senha = null

        this.autenticaUsuario = this.autenticaUsuario.bind(this)
    }

    autenticaUsuario() {
        this.setState({ estaLogando: true, erro: false })
        auth.signInWithEmailAndPassword(this.email.value, this.senha.value)
            .then(user => {
                console.log('Usuario Logado', user)
                this.setState({ estaAutenticado: true })
            })
            .catch(erro => {
                console.log('Erro', erro)
                this.setState({ erro: true, estaLogando: false, estaAutenticado: false })
            })
    }

    render() {

        if (this.state.estaAutenticado) {
            return <Redirect to='/admin' />
        }
        if (this.state.estaLogando) {
            return (
                <div className='container'>
                    <SemFoto />
                    <p className="glyphicon glyphicon-refresh">Aguarde...</p>
                </div >
            )
        }
        return (
            <div className='container'>
                <SemFoto />
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" name='email' ref={ref => this.email = ref} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />


                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" name='senha' ref={ref => this.senha = ref} className="form-control" id="exampleInputPassword1" />
                    {this.state.erro && <small id="emailHelp" className="form-text text-muted">Login ou Senha Errado</small>}
                </div>

                <button type="button" className="btn btn-primary" onClick={this.autenticaUsuario}>Submit</button>

            </div>
        )
    }
}

export default Login