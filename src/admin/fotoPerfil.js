import React from 'react'
import { Link } from 'react-router-dom'


const FotoPerfil = props => {
    return (
        <div  className='container'>
            <form>
                
                    <label htmlFor="imagem">Escolha sua imagem de Perfil</label>
                    <input type="file" className="form-control-file" id="exampleFormControlFile1" />
                    <br/>
                    <button type="submit" className="btn btn-primary">Salvar</button>
                
            </form>
        </div>
    )
}


export default FotoPerfil