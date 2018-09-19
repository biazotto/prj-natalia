import React from 'react'
import { Link } from 'react-router-dom'


const Admin = props => {
    return (
        <div className="col-md-6 offset-md-3">
            <div className="list-group">
                <a href="#" className="list-group-item list-group-item-action active">
                    Selecione uma opção </a>
                <li><Link to='/admin/portfolio'>Portfolio</Link></li>
                <li><Link to='/admin/alterarfoto'>Alterar Foto do Perfil</Link></li>


            </div>
        </div>
    )
}


export default Admin