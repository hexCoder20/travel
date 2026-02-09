import React from 'react';

function DestinationsCard({ destination }) {
    return (
        <div className="card">
            <img src={destination.image} alt={destination.country} className='card-img'></img>
            <div className="card-content">
                <h3>{destination.country}</h3>
                <p>{destination.desc}</p>
                <span className="price">{destination.price}</span>
            </div>
            <button className="book-btn">Book Now</button>
        </div>
    )
}

export default DestinationsCard;