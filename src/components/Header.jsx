import React from 'react'
import Navbar from './Navbar'
import './HeaderStyle.css'

export default function Header() {
    return (
        <section className='header'>
            <section className='header-container'>
                <section className='header-logo'>
                    <div className='logo'>JeAPIrdy</div>
                </section>
                <Navbar />
            </section>
        </section>
            
       
    )
}
