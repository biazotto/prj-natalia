import React, { Component } from 'react';
import SemFoto from './semFoto'
import axios from 'axios'
import config from './../fire-baseconfig'

class Projeto extends Component {
    constructor(props) {
        super(props)
        this.state = {
            projeto: {}
        }
        this.buscaProjeto(this.props.match.params.id)

        config.syncState('Perfil', {
            context: this,
            state: 'Perfil',
            asArray: false
        }
        )

    }
    buscaProjeto(id) {
        axios
            .get(`https://prj-natalia1.firebaseio.com/portfolio/${id}`)
            .then(resultado => {
                this.setState({ projeto: resultado.data })
            })
            .catch(e => console.log('erro'))
    }
    

render() {
    const { id } = this.props.match.params


    return (
        <div>
            <SemFoto />
            <div className='container'>
                <p>{id}</p>

            </div>
            <div className="col-sm-12">
                <div className='thumbnail'>
                    <div className="well" align='center'>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>

    )
}
}

export default Projeto