import React, { Component } from 'react'
// import profile image
import photo from "./images/photo.jpg";
import Links from './Links';
import Socials from './Socials';

export default class Profile extends Component {
    render() {
        return (
           <div>
                <div className='avatar'>
                    <img className='photo circle responsive-img' src={photo} alt="Matteo Galesi" />
                </div>
                <div className='card center teal darken-3 z-depth-0'>
                    <h3 className=' center grey-text text-lighten-3'>
                        <strong className='title'>MATTEO GALESI</strong> 
                    </h3>
                    {/* using Materialize and FontAwesome styling and icons */}
                    <h5 className='center grey-text text-lighten-3'>Full Stack Web Developer</h5>
                    <p className=' center grey-text text-lighten-1'>London, UK</p>
                    <p><a href="mailto:matteogalesi@icloud.com" className="underline grey-text text-lighten-1">matteogalesi@icloud.com</a></p>
                    <br />
                    <Socials />
                    <Links />

                </div>             
           </div>
           
        )
    }
}