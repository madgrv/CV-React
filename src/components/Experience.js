import React, { Component } from 'react'

//Experience component
export default class Experience extends Component {
    render() {
        return (
           <div>
                <div className='card z-depth-0'>
                    <div className='card-content'>
                        <h6>
                            <strong className='sectionTitle'>
                                <i class="fa-solid fa-briefcase icon"></i>
                                EXPERIENCE
                            </strong>
                        </h6>
                        <hr />
                        {/* add a container with a line divider */}
                        <div className='row mt'>
                            <div className='col s12'>
                                <blockquote className='content-right'>
                                    <h6 className="no-pad mt-bottom">
                                    <storng className='sectionTitle'>STUDENT AT HYPERION DEV</storng>
                                    <span className='duration'> Dec 2022 - Apr 2023</span>
                                    </h6>
                                    <p>
                                    Full-time, university-certified intensive web development bootcamp, graduated with 
                                    an average grade of 100%. <br />
                                    Project-focused course,the topics and technologies covered in the course were:
                                    </p>
                                    <ul>
                                        <li> Basics of computer programming and algorithms</li>
                                        <li> Data and control structures</li>
                                        <li> Object-oriented programming</li>
                                        <li> Responsive web design</li>
                                        <li> DOM manipulation and event handling</li>
                                        <li> HTML, CSS, JSON, Node.js</li>
                                        <li> JavaScript</li>
                                        <li> React</li>
                                    </ul>
                                </blockquote>
                            </div>
                            <div className="col s12">
                                <blockquote className="content-right">
                                    <h6 className="no-pad mt-bottom">
                                        <storng  className='sectionTitle'>RECORD PRODUCER </storng>
                                        <span className='duration'> freelance, 2016 - PRESENT</span>
                                    </h6>
                                    <p className="pt">
                                    Project management and creative direction for artists, musicians, and bands, arranging and producing the 
                                    compositions and sonic scope from inception to completed product. 
                                    <br/>
                                    <br/>
                                    Management of bookings, timelines, and budgets. With a keen eye for product identity and authenticity and a 
                                    passion for technology and innovation. <br/>
                                    I have helped artists reach major record-label quality releases, gaining them millions of Spotify streams.
                                    <br/>
                                    A career path that stemmed from experience as a musician and a passion for sound. 
                                    <br/>
                                    <br/>
                                    Notable credits include: Rex Kudo, Andrew Sheps, Mark Ralph, Yoad Nevo, and Aamir Yaqub.
                                    </p>
                                </blockquote>
                            </div>
                            <div className="col s12">
                                <blockquote className="content-right">
                                    <h6 className="no-pad mt-bottom">
                                        <storng  className='sectionTitle'>AUDIO ENGINEER </storng>
                                        <span className='duration'> freelance, 2015 - PRESENT</span>
                                    </h6>
                                    <p className="pt">
                                    Recording and live audio engineer, with extensive experience in handling complex analogue and digital setups 
                                    and signal flows, making critical time-sensitive decisions and providing a first-rate customer experience.
                                    <br/>
                                    <br/>
                                    Comfortable working under pressure, managing client and venue requirements whilst ensuring smooth and uninterrupted sessions.
                                    Clients include: <br/>
                                    Hard Rock Hotel, The Crypt - St. Martins In The Fields, Q-Club Shoreditch,
                                    Tileyard Studios and ICMP (University of East London).
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