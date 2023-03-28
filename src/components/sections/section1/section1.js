import React from "react";
import './section1.css'

export default function Section1(){

    return <section id="section1">
        <div id="section1-child">
            <p id="welcome">BEM VINDO, EU SOU O<br/></p>
            <p id="my-name-p">VITOR ARAUJO</p>
            <p id="role">DESENVOLVEDOR FRONT-END</p>
            <div id="btn-div">
                <a href="https://www.linkedin.com/in/vitor-araujo-morais-966545199/" id="linkedin-btn" className="btn-social-media">linkedin</a>
                <a href="https://github.com/VITOR-ARAUJO-MORAIS" id="Github-btn" className="btn-social-media">Github</a>
            </div>
        </div>
    </section>

}