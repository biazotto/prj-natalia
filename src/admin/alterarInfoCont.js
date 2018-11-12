import React, { Component } from 'react';
import config, { storage } from '../fire-baseconfig';


class alterarInfoCont extends Component {
    constructor(props) {
        super(props)

        this.state = {
            estaGravando: false,
        }

        this.gravaInfoCont = this.gravaInfoCont.bind(this)
    }

    gravaInfoCont(e) {
        this.setState({ estaGravando: true })
        
        const novaInfoContato = {
            telefone: this.telefone.value,
            email: this.email.value,
            cidade: this.endereco.value
        }
        config.update('Perfil',{
            data: novaInfoContato
        })


        { alert("About alterado com sucesso!") }
        this.setState({ estaGravando: false })


            
   
        e.preventDefault()
    }



    render() {
        if (this.state.estaGravando) {
            return (
                <div className='container'>
                    <p>Salvando...</p>
                </div>
            )
        }
        return (

            <div className='container'>
                <h2> Alterar Informações de contato </h2>
                <form onSubmit={this.gravaInfoCont}>

                    <label htmlFor="telefone">Telefone</label>
                    <br />
                    <input type= 'text' className="form-control" id="telefone" ref={(ref) => this.telefone = ref} rows="4" />
                    <br />
                    <label htmlFor="email">Email</label>
                    <br />
                    <input type= 'text' className="form-control" id="email" ref={(ref) => this.email = ref} rows="4" />
                    <br />
                    <label htmlFor="endereco">Endereço</label>
                    <br />
                    <input type= 'text' className="form-control" id="endereco" ref={(ref) => this.endereco = ref} rows="4" />
                    <br />
                    <button type="submit" className="btn btn-primary">Salvar</button>
                </form>
            </div>

        )
    }
}


export default alterarInfoCont

