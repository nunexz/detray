import React from 'react'
import Search from '../../components/Search';
import Scripts from '../../components/Scripts';


const Main = () => {
    return (
        <div id='container'>
            <div className='header'>
                <h1>Detray</h1>
            </div>

            <Search />
            <Scripts />
        </div>
    )
}

export default Main