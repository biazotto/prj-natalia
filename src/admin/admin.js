import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { auth } from '../fire-baseconfig'
import AdminMenu from './AdminMenu'
import AdminPortfolio from './AdminPortfolio'
import SemFoto from '../componentes/semFoto';
import FotoPerfil from './fotoPerfil';
import alterarAbout from './alterarAbout'
import alterarInfoCont from './alterarInfoCont'
import excluirProjeto from './excluirProjeto'



class Admin extends Component {
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

            <div>
                <SemFoto />
                <Route path={'/'}  component={AdminMenu} />
                <Route path={`${this.props.match.url}/portfolio`} component={AdminPortfolio} />
                <Route path={`${this.props.match.url}/alterarfoto`} component={FotoPerfil} />
                <Route path={`${this.props.match.url}/alterarAbout`} component={alterarAbout} />
                <Route path={`${this.props.match.url}/altinfocont`} component={alterarInfoCont} />
                <Route path={`${this.props.match.url}/excluirProjeto`} component={excluirProjeto} />

            </div>

        )
    }
}


export default Admin