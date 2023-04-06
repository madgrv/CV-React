import React, { Component } from 'react'
// import {MyIcons} from "./MyIcons.js"
// The line above imports my custom icons component, I've left it in for future reference and use

// Summary section for the CV
export default class Summary extends Component {
    render() {
        return (
           <div>
                <div className='card z-depth-0'>
                    <div className='card-content'>
                        <h6>
                            <strong className='sectionTitle'>
                                <i className="fa-regular fa-id-card icon"></i>
                                {/* <MyIcons.SummIcon /> */}
                                {/* The line above used my custom created icon, I've left it in for future reference and use */}
                                SUMMARY
                            </strong>
                        </h6>
                        <hr />
                        {/* add a container with a line divider */}
                        <div className='row'>
                            <div className='col s12'>
                                <blockquote className='content-right'>
                                    <p>
                                    A highly motivated full-stack developer, with a passion for coding, currently enrolled at HyperionDev 
                                    web developer bootcamp with an average of 99%.
                                    With a strong desire to contribute to the team's success through hard work, attention to detail, and 
                                    creative thinking. With an artistic background, a clear understanding of software development principles, 
                                    and proficiency in programming languages such as JavaScript, HTML, and CSS. Committed to learning and growing 
                                    in the tech industry.
                                    </p>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        )
    }
}

// Sources:
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote