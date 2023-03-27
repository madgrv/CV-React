import React, { Component } from 'react'

//Create efooter component
export default class Footer extends Component {
    render() {
        return (
            <footer>
              <div className="card-content text-center">
                <h5 className='underline center grey-text text-lighten-3'>                 
                    <a href="#" className="scroll" onClick={this.scrollToTop}>
                      Back To Top
                    </a>              
                </h5>
              </div>
            </footer>
        )    
    }
}