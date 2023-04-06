
import React, { Component } from 'react'

// A component with the social links list for the Profile column
export default class Socials extends Component {
    render() {
        return (
            <div className='center socials'>
                <a href="https://www.linkedin.com/in/matteogalesi/" target="blank">
                    {/* add icon */}
                    <i className="fab fa-linkedin fa-2x" target="blank"></i>
                </a>
                <a href="https://github.com" target="blank">
                    <i className="fab fa-github-square fa-2x"></i>
                </a>
            </div>
        )
    }
}