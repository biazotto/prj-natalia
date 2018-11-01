import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { auth } from './../fire-baseconfig'
import SemFoto from '../componentes/semFoto';
import { Link } from 'react-router-dom'


class AdminMenu extends Component {
    constructor(props) {
        super(props)

        this.state = {
            estaLogando: true,
            estaAutenticado: false,
            user: null
        }

    }

    componentDidMount() {
        auth.onAuthStateChanged(user => {
            this.setState({
                estaLogando: false,
                estaAutenticado: !!user,
                user
            })
        })
    }

    deslogar() {
        auth.signOut()
    }

    render() {
        if (this.state.estaLogando) {
            return (
                <div>
                    <SemFoto />
                    <div className='container'>

                        <p className="glyphicon glyphicon-refresh">Aguarde...</p>
                    </div>
                </div>
            )
        }
        if (!this.state.estaAutenticado) {
            return (
                <Redirect to='/login' />
            )
        }
        return (

            <div className="container">
            
                <div className="list-group">
                    <a href="#" className="list-group-item list-group-item-action active">
                        Selecione uma opção </a>
                    <li><Link to='/admin/portfolio'>Novo Projeto</Link></li>
                    <li><Link to='/admin/excluirProjeto'>Excluir Projeto</Link></li>
                    <li><Link to='/admin/alterarfoto'>Alterar Foto</Link></li>
                    <li><Link to='/admin/alterarabout'>Alterar About</Link></li>
                    <li><Link to='/admin/altinfocont'>Alterar Informações de contato</Link></li>
                    
                </div>
                <button onClick={this.deslogar} type="button" className="btn btn-primary">Logout</button>
            </div>
        )
    }
}


export default AdminMenu