import React from 'react';
import "./carcard.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGroup,faGauge,faGasPump,faHeart } from '@fortawesome/free-solid-svg-icons'; 
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css"

function CarCard ({ car }) {
  return (
    <div className="car-card">
      <img src={car.image_url} alt={car.name} className='image_' />
      <div className='name-and-year'>
      <span  className='car-name'>{car.name}</span> <span className='year'> {car.year_of_manufacture}</span>
      </div>
      <div className='details-container'>
      <div className='details'>
      <span className='span-element'><FontAwesomeIcon icon={faUserGroup} className='icon'/>{car.seating_capacity}</span>
      <span className='span-element'><FontAwesomeIcon icon={faGauge} className='icon'/>{car.mileage}km/1-litre</span>
      </div>
      <div className='details'>
      <span className='span-element fuel-type'><FontAwesomeIcon icon={faGasPump} className='icon'/>{car.fuel_type}</span>
      <span className='span-element'><img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/steering-wheel.png" alt="steering-wheel" />{car.is_automatic=== true ? "Automatic": "Self Drive"}</span>
      </div>
      </div>
      <hr/>
      <div className='cost-rent'>
      <b> <span className='cost'>${Math.ceil(Math.random()*1000)}</span>/month</b> 
      <span>
      <Button variant="outline-primary"><FontAwesomeIcon icon={faHeart} /></Button>{" "}
      <Button variant="primary">Rent Now</Button>
      </span>
      </div>
    </div>
  );
};

export default CarCard;
