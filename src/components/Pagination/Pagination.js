import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
display: flex; 
justify-content: center; 
align-items: center; 
height: 150px; 
margin-top: 0px; 
& > ul {
    display: flex; 
    justify-content: space-between;
    margin-right: 20px;
    & > li {
        display:flex; 
        justify-content: space-between;
        list-style: none; 
        
        & > a {
            text-decoration: none; 
            color: black; 
            padding: 5px; 
            border: blue; 
            &:hover {
                color: white; 
            }
        } 
    }
}
`

const Pagination = ({ moviePerPage, totalPosts, paginate, setMoviePerPage }) => {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalPosts / moviePerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <Container>
      <ul>
        {pageNumber.map((page) => (
          <li key="page">
            <a onClick={() => paginate(page)} href ="#">{page}</a>
          </li>
        ))}
      </ul>
      <select onChange={(e) => setMoviePerPage(e.target.value)}>
        <option value='12'>Hits per page</option>
        <option value='4'>4</option>
        <option value='8'>8</option>
        <option value='12'>12</option>
    </select>
    </Container>
    
  );
};

Pagination.propTypes = {
  moviePerPage: PropTypes.Number,
  totalPosts: PropTypes.Number,
  paginate: PropTypes.func,
  setMoviePerPage: PropTypes.Number
};

export default Pagination;
