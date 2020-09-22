import React , { useState } from 'react'
import Search from '../../components/Search';
import Scripts from '../../components/Scripts';
import './styles.css'

const Main = () => {
    const [selectedTag, setSelectedTag] = useState('')
    return (
        <div id='container'>
            <div className='header'>
                <h1>Detray</h1>
            </div>

            <Search selectedTag={selectedTag} setSelectedTag={setSelectedTag}/>
            <Scripts selectedTag={selectedTag}/>
        </div>
    )
}

export default Main