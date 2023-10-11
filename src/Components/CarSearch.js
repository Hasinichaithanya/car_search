import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import "./carsearch.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import CarCard from './CarCard';
import Pagination from './Pagination';

function CarSearch({ cars }) {
  const { page } = useParams();
  const navigate = useNavigate(); 

  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(Number(page) || 1);
  const carsPerPage = 6;

  const filteredCars = cars.filter(car =>
    car.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);

  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
    navigate(`/page/${pageNumber}`); 
  };

  useEffect(() => {
    if (!page) {
      navigate('/page/1'); 
    }
  }, [page, navigate]);
 

  return (
    <div className="car-search">
      <div className="search-and-filters">
      <div className="search-input-container">
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
              value={searchQuery}      
              onChange={e => setSearchQuery(e.target.value)}
            />
            <FontAwesomeIcon icon={faMagnifyingGlass} className='icon'/>
      </div>

      <select name="Relevance" >
        <option value="brands" disabled selected>Relevence</option>
        <option value="volvo">Price (low to high)</option>
        <option value="saab">Price (high to low)</option>
      </select>
      
     <select name="cars">
        <option value="brands" disabled selected>All Brands</option>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
    </div>
  
      <div className="car-list">
        { filteredCars.length>0? 
        currentCars.map(car => (
          <CarCard key={uuidv4()} car={car} />
        )):<h3>No Cars Found!</h3>}
      </div>

      <Pagination
        carsPerPage={carsPerPage}
        totalCars={filteredCars.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </div>
  );
};

export default CarSearch;
