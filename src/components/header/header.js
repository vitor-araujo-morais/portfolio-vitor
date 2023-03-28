import './header.css';
import React from 'react';

function toggleButton(){
    //const togButton = document.getElementsByClassName('toggle-button')[0]
    const navbarLinks = document.getElementById('header-right-side')
    navbarLinks.classList.toggle('active');
}


function Header(){
    return (
        <div id = "header">
            <p id = "my-name">Portfólio </p>
            <button onClick={toggleButton}  href='#' className='toggle-button'>
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
            </button>
            <div id = "header-right-side">
                <p><a href="#section2"> Sobre mim</a></p>
                <p><a href="#section3">Projetos</a></p>
                <p><a href="#section4">conhecimentos</a></p>
                <button onClick={toggleButton} href="#" className='close-button'>X</button>
            </div>
        </div>
    )
}

export default Header;

