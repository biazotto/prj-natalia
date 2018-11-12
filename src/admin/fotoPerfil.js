import React, { Component } from 'react';
import config, { storage } from '../fire-baseconfig';


class fotoPerfil extends Component {
    constructor(props) {
        super(props)

        this.state = {
            estaGravando: false,
        }

        this.gravaFoto = this.gravaFoto.bind(this)
    }

    gravaFoto(e) {

        this.setState({ estaGravando: true })
        const arquivo = this.imagem.files[0]
        const { name } = arquivo
        console.log(arquivo)


        const ref = storage.ref(name)
        ref.put(arquivo).then(img => {
            img.ref.getDownloadURL()
                .then(downloadURL => {
                    const novaImagem = {
                        imagem: downloadURL
                    }
                    console.log(novaImagem)
                    config.update('Perfil', {
                        data: novaImagem
                    })

                    { alert("Foto salva com sucesso!") }
                    this.setState({ estaGravando: false })
                })
        })


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
                <h2> Trocar Imagem do Perfil </h2>
                <form onSubmit={this.gravaFoto}>
                    <label htmlFor="imagem">Escolha sua imagem de Perfil</label>
                    <input type="file" className="form-control-file" id="imagem" ref={(ref) => this.imagem = ref} />
                    <br />
                    <button type="submit" className="btn btn-primary">Salvar</button>
                </form>
            </div>

        )
    }
}


export default fotoPerfil

