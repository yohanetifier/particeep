import React /* {useState} */ from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10%;
  border-top: 1px solid #cccccc;
  & > select {
    height: 50%;
  }
`;

export default function Categories({ categories, setActiveCategory, activeCategory }) {
  return (
    <Container>
      <select value={activeCategory} onChange={(e) => setActiveCategory(e.target.value)}>
        <option value="">----</option>
        {categories.map((categorie) => (
          <option key={categorie} value={categorie}>
            {categorie}
          </option>
        ))}
      </select>
    </Container>
  );
}

Categories.propTypes = {
  datas: PropTypes.arrayOf(PropTypes.object).isRequired,
  categories: PropTypes.arrayOf(PropTypes.string),
  setActiveCategory: PropTypes.func,
  activeCategory: PropTypes.string
};
