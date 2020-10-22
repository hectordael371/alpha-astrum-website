import React from 'react'
import './ProjectCard.css'

export default class ProjectCard extends React.Component {

    paragraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Suspendisse varius enim in eros elementum tristique. Duis cursus, 
                mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero`;

    render() {
        return(
            <div id="card-container" className="container">
                <div id="image-container" className="container">
                    <img src={require("../../assets/draco1-logo.png")}></img>
                </div>
                <div id="text-container" className="container">
                    <h1 id="card-title" className="text">D.R.A.C.O.</h1>
                    <p id="card-paragraph" className="text">{this.paragraph}</p>
                </div>
            </div>
        )
    }
}