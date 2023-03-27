// Creating my own icons library with my custom icon images

import React from "react";
import SummaryIcon from "./icons/Summary.png";

function SummIcon(props) {
    return   <i style={{
        width: '42px',
        height: '42px',
        backgroundImage: `url(${SummaryIcon})`,
        backgroundSize: 'cover',
      }}
    />
}


export const MyIcons = {
    SummIcon
};


// This method worked fine but I decided to switch back to the FontAwesome library as the Materialize CSS was creating too many conflicts.
// I've left it here for future reference and to continue at a later stage.