import React, { Component } from 'react'

//Creating the Education component
export default class Education extends Component {
    render() {
        return (
            <div className='card z-depth-0'>
                <div className='card-content'>
                    <h6>
                        <strong className='sectionTitle'>
                            <i class="icon fa-sharp fa-solid fa-hat-wizard"></i>
                            EDUCATION
                        </strong>
                    </h6>
                    <hr />
                    <div className='row mt'>
                        <div className='col s12'>
                            <blockquote className='content-right'>
                                <h6 className="no-pad mt-bottom">
                                <storng  className='sectionTitle'>HYPERION DEV </storng>
                                <span className='duration'>Dec 2022 - Apr 2023</span>
                                </h6>
                                <p>
                                Bootcamp <br/>
                                Full Stack Web Development.<br/>
                                Graded: 99% average
                                </p>
                            </blockquote>
                        </div>
                    </div>
                    <div className='row mt'>
                        <div className='col s12'>
                            <blockquote className='content-right'>
                                <h6 className="no-pad mt-bottom">
                                <storng  className='sectionTitle'>ICMP, University Of East London</storng>
                                <span className='duration'>London, Sep 2013 — May 2016</span>
                                </h6>
                                <p>
                                BMus (Hons) - Music Performance <br/>
                                Graded: Second Class (Upper Division) Honours
                                </p>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}