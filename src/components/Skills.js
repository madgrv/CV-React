import React, { Component } from 'react'

export default class Skills extends Component {
    render() {
        return (
            <div className="card teal darken-3 z-depth-0">
                <div className="card-content">
                    <h6 className="white-text">
                        <strong>TECH STACK:</strong>
                    </h6>
                    <hr />
                    <ul className="grey-text text-lighten-3 pt">
                        <li>JavaScript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>React</li>
                        <li>Node.js</li>
                    </ul>
                </div>
                <div className="card-content">
                    <h6 className="white-text">
                        <strong>SKILLS:</strong>
                    </h6>
                    <hr />
                    <ul className="grey-text text-lighten-3 pt">
                        <li>Creative Problem Solving</li>
                        <li>Ability to Learn Quickly</li>
                        <li>Adaptability</li>
                        <li>Mediation</li>
                        <li>Team player</li>
                        <li>Ability to Work Under Pressure</li>
                    </ul>
                </div>
            </div>   
        )
    }
}