import React, { Component } from 'react';
import config, { storage } from '../fire-baseconfig';


class alterarInfoCont extends Component {
    constructor(props) {
        super(props)

        this.state = {
            estaGravando: false,
        }

        this.gravaAbout = this.gravaAbout.bind(this)
    }

    gravaInfoCont(e) {

        this.setState({ estaGravando: true })
        const texto = this.about.value
        console.log(texto)

    
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

                    <label htmlFor="about">Telefone</label>
                    <br />
                    <input type= 'text' className="form-control" id="about" ref={(ref) => this.about = ref} rows="4" />
                    <br />
                    <label htmlFor="about">Email</label>
                    <br />
                    <input type= 'text' className="form-control" id="about" ref={(ref) => this.about = ref} rows="4" />
                    <br />
                    <label htmlFor="about">Endereço</label>
                    <br />
                    <input type= 'text' className="form-control" id="about" ref={(ref) => this.about = ref} rows="4" />
                    <br />
                    <button type="submit" className="btn btn-primary">Salvar</button>
                </form>
            </div>

        )
    }
}


export default alterarInfoCont

