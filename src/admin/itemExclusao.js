import React from 'react'

const ItemExclusao = props => {
    return (
        <div>
            <input type="checkbox" className="custom-control-input" name='projeto' id={props.id} />
            <label className="custom-control-label" htmlFor="customCheck1">{props.conteudo.titulo}</label>
            <br />
        </div>
    )
}

export default ItemExclusao

