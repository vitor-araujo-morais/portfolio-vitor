import './section2.css'
import React from 'react';


export default function Section2(){
    return <section id="section2">
        
        <p id='section2-title'>Sobre mim</p>

        <div id="section2-elements">
            <p id="section2-main-text">
            &nbsp;&nbsp;&nbsp; Amante de tecnologias, estou sempre procurando aprender e evoluir meus conhecimentos. 
            Gosto de desafios e de resolver problemas, procurando sempre a solução mais viável.<br/>
            &nbsp;&nbsp;&nbsp; Estou no segundo semestre em Análise e Desenvolvimento de Sistemas, 
            já cursei desenvolvimento em jogos e também informática avançada, atualmente estou estudando Bancos de dados e Node.js. Também 
            tenho uma grande afinidade para área de desenvolvimento web, mais especificamente com Node.js para BACK-END e ReactJS junto ao Typescript e Bootstrap no FRONT-END.
            Alguns dos projetos que desenvolvi estão disponíveis no meu Github!
            </p>
            <div id="buttons-div">
            <a href="pdfs\curriculoti.pdf" download="Vitor Araujo Curriculo"><button>Currículo - Full-Stack</button></a>
            </div>
        </div>
    </section>
}