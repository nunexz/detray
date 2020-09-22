import React from 'react'
import './styles.css'

const TAGS = [
    'ATENDIMENTO',
    'PRIORIDADES',
    'SUPORTE',
    'ESTORNO',
    'COMPROVANTE',
]
const Search = ({ selectedTag, setSelectedTag }) => {
    
    return (
        <div className='search'>
            <ul>
                {TAGS.map(tag => (
                    <li 
                        className={selectedTag===tag?'selected':''}
                        onClick={() => setSelectedTag(currentValue => currentValue === tag? '' : tag)}
                    >{tag}</li>
                ))}
            </ul>

            <input type="text"/>
            <button>Cadastrar</button>

            </div>
    )
}

export default Search