import React, { Component } from 'react'
import Skills from './Skills';
import Profile from './Profile';
import Summary from './Summary';
// import Header from './Header';
import Experience from './Experience';
import Education from './Education';
import Languages from './Languages';
import Footer from './Footer';


// Create structure for the Home page
export default class Home extends Component {
    render() {
        return (
            <section>
                        {/* Using className from imported Materialize-CSS library */}
                <div className="contaier">
                    <div className="row">
                        <div className="col rounded spaced s12 m4 l4 card teal darken-3 z-depth-0">
                            <Profile />
                            <Skills />
                            <Languages />
                        </div>
                        <div className='col s12 m8 l8'>
                            <Summary />
                            <Experience />
                            <Education />
                        </div>
                    </div>
                </div>
                <Footer />
            </section>
        );
    }
}