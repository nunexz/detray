import React from 'react'

const Search = ({ type }) => {
    return (
        <div className='search'>
            <ul>
                <li>Suporte</li>
                <li>Atendimento</li>
                <li>Estorno</li>
                <li>Comprovante</li>
                <li>Prioridades</li>
            </ul>

            <input type="text"/>
            <button>Cadastrar</button>

            </div>
    )
}

export default Search