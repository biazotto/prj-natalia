import React from 'react'
import {Link} from 'react-router-dom'

const ItemPortfolio = props => {
    return (
        <div className='col-sm-4 '>
            <div className='thumbnail'>
                <img src={props.conteudo.imagem} className='img-rounded' height='380' width='350' />
                <p><strong>{props.conteudo.titulo}</strong></p>
                <p>{props.conteudo.descricao}</p>
                <Link to={`/projeto/${props.id}`}>Ver mais</Link>

            </div>
        </div>
    )
}

export default ItemPortfolio