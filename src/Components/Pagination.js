import React from 'react';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css"
import "./pagination.css";

const Pagination = ({ carsPerPage, totalCars, currentPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCars / carsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className='pagination-line'>
      <div>
       <span className="pagination-page"> {currentPage}</span>of<span className="pagination-page">{Math.ceil(totalCars / carsPerPage)}</span>
      </div>
    <div className='pagination'>
        <Button 
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage === 1 || totalCars===0}variant="primary">Previous</Button>

      {pageNumbers.map(number => (
        <button
          key={number}
          className='pagination-button'
          onClick={() => paginate(number)}
        >
          {number}
        </button>
      ))}

      <Button
        onClick={() => paginate(currentPage + 1)}
        disabled={currentPage === pageNumbers.length || totalCars===0}
      >
        Next
      </Button>
    </div>
    </div>
  );
};

export default Pagination;
