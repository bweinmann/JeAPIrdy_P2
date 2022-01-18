import React from 'react'
import './Button.css';
import './HomeStyle.css'


const Home = ({props}) => {

    const begin = () => props(true)
 
    return (
        <div className='intro'>
            <h1>Welcome to JeAPIrdy</h1>
            <h4>Test your knowledge</h4>
            <button onClick={begin}>Good Luck!</button>
        </div>
    )
}

export default Home