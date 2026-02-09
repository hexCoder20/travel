import React from 'react';
import DestinationsCard from './DestinationsCard';

import './Destinations.css';

function Destinations({destinations}){
    return(
        <div className="destinations-container">
            <h2 className="section-title">Popular Destinations</h2>
            <div className="destinations-grid">
                {destinations.map((destination)=>(
                    <DestinationsCard destination={destination}></DestinationsCard>
                ))}
            </div>
        </div>
    )
}

export default Destinations;