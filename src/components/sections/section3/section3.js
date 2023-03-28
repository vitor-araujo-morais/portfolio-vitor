import './section3.css'
import React from 'react'

export default function section3(){

    return <section id="section3">

        <p id="section3-title">Meus Projetos</p>

        
        <div className='section3-data-back-end'>    
            <div id="section3-buttons">
                <button type="text" id='back-end-button'> Javascript </button>
            </div>
            <div id="my-projects-back">

                <div className='project-class-back'>
                    <p className='project-title'>Notas em Cards</p>
                    <p className='project-text'>Esse projeto foi desenvolvido com o framework React, nele foi feito um bloco de notas que se dividem em cards. De acordo com o que o usuário coloca como título, descrição e cor , se cria um novo card com a personalização do usuário.<br></br>
                    Tools: React, Typescript, Bootstrap
                    </p>
                    <a href='https://github.com/VITOR-ARAUJO-MORAIS/Cards_Interativos'>Link do Github</a>
                </div>    
                <div className='project-class-back'>
                    <p className='project-title'>Conversor de Moedas</p>
                    <p className='project-text'>Um simples conversor de moedas para real, nessa aplicação o usuário escolhe qual moeda ele deseja converter para real e o programa vai consultar uma API pública com as principais moedas disponíveis, além de converter ele também traz algumas outros dados sobre a moeda escolhida<br></br> 
                    Tools: JQuery, AJAX
                    </p>
                    <a href='https://github.com/VITOR-ARAUJO-MORAIS/Conversao_de_Moedas'>Link do Github</a>
                </div>    
                  
            </div>

        </div>

        <div className='section3-data-back-end'>    
            <div id="section3-buttons">
                <button>Java</button>
            </div>
            <div id="my-projects-back">

                <div className='project-class-back'>
                    <p className='project-title-cc'>Cadastramento de Cargas</p>
                    <p className='project-text'>O projeto foi feito como um sistema para cadastramento de cargas de uma transportadora, incluindo a consulta, edição e remoção de dados. Todo o projeto foi baseado em orientação a objeto sem qualquer tipo de framework.
                    </p>
                    <a href='https://github.com/VITOR-ARAUJO-MORAIS/Cadastramento_de_Carga'>Link do Github</a>
                </div>      

            </div>
        </div>

    </section>

}