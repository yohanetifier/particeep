import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex; 
`;

export default function MoviesList({
  datas,
  setMovies,
  categories,
  activeCategory,
  loading,
}) {
  if (loading) {
    return <h1>Datas in progress</h1>;
  }
  return (
    <Container>
      <MoviesCard
        datas={datas}
        setMovies={setMovies}
        categories={categories}
        activeCategory={activeCategory}
      />
    </Container>
  );
}

MoviesList.propTypes = {
  datas: PropTypes.arrayOf(PropTypes.object).isRequired,
  setMovies: PropTypes.func,
  categories: PropTypes.arrayOf(PropTypes.string),
  activeCategory: PropTypes.string,
  loading: PropTypes.bool,
};
