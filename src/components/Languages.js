import React, { Component } from 'react'

//A language section for the Profile column
export default class Languages extends Component {
    render() {
        return (
            <div className="card teal darken-3 z-depth-0">
                <div className="card-content">
                    <h6 className="white-text">
                        <strong>LANGUAGES:</strong>
                    </h6>
                    <hr />
                    <ul className="grey-text text-lighten-3 pt">
                        <li>English</li>
                        <br/>
                        <li>Italian</li>
                    </ul>
                </div>
            </div>   
        )
    }
}