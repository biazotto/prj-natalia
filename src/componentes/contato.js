import React, { Component } from 'react';
import config from '../fire-baseconfig'

class Contato extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Perfil: {

            }
        }

        config.syncState('Perfil', {
            context: this,
            state: 'Perfil',
            asArray: false
        }
        )

    }


    render() {
        return (

            <div>

                <div id='contact' className='container-fluid bg-grey'>
                    <h2 className='text-center'>Contato</h2>
                    <div className='row'>
                        <div className='col-sm-5'>
                            <p>Entre em contato</p>
                            <p><span className='glyphicon glyphicon-map-marker'></span> {this.state.Perfil.cidade}</p>
                            <p><span className='glyphicon glyphicon-phone'></span> {this.state.Perfil.telefone}</p>
                            <p><span className='glyphicon glyphicon-envelope'></span> {this.state.Perfil.email}</p>
                        </div>
                        <div className='col-sm-7 '>
                            <div className='row'>
                                <form action="https://us-central1-prj-natalia1.cloudfunctions.net/enviarEmail" method="post">
                                    <div className='row'>
                                        <div className='col-sm-6 form-group'>
                                            <input className='form-control' id='assunto' name='assunto' placeholder='Nome/Empresa' type='text' required />
                                        </div>
                                        <div className='col-sm-6 form-group'>
                                            <input className='form-control' id='remetente' name='remetente' placeholder='Email Para Contato' type='email' required />
                                        </div>
                                    </div>
                                    <textarea className='form-control' id='corpo' name='corpo' placeholder='Digite seu texto aqui' rows='5'></textarea><br />
                                    <div className='row'>
                                        <div className='col-sm-12 form-group'>
                                            <button className='btn btn-default pull-right' type='submit'>Send</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contato