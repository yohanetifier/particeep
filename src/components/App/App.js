import React, { useState, useEffect } from 'react';
import './App.css';
import Menu from '../Menu/Menu';
import Header from '../Header/Header';
import HomeIcon from '@mui/icons-material/Home';
import MovieIcon from '@mui/icons-material/Movie';
import Categories from '../Categories/Categories';
import styled from 'styled-components';
import { movies$ } from '../../assets/Datas/Datas';
import MoviesList from '../MoviesList/MoviesList';
import Pagination from '../Pagination/Pagination';
import Banner from '../Banner/Banner';
import Welcome from '../Welcome/Welcome';
import Footer from '../Footer/Footer';

const MainContainer = styled.div`
  position: relative;
  top: 70px;
  z-index: 1;
  width: 100%;
  height: 600px;
  background-color: #4c4c4c;
`;

function App() {
  const [menu, setMenu] = useState(false);
  const [movies, setMovies] = useState([]);
  const [activeCategory, setActiveCategory] = useState('');
  const [loading, setLoading] = useState(false);

  /* Pagination */

  const [currentPage, setCurrentPage] = useState([1]);
  const [moviePerPage, setMoviePerPage] = useState(12);

  /* Get current movies */

  const indexLastMovies = currentPage * moviePerPage;
  const indexOfFirstMovies = indexLastMovies - moviePerPage;
  const currentMovies = movies.slice(indexOfFirstMovies, indexLastMovies);

  // Change page

  const paginate = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    movies$.then((result) => {
      setLoading(true);
      setMovies(result);
      setLoading(false);
    });
  }, []);

  const categories = [];
  movies.map((movie) =>
    !categories.includes(movie.category)
      ? categories.push(movie.category)
      : null
  );

  const handleClick = () => {
    setMenu(true);
  };
  const handleClose = () => {
    setMenu(false);
  };

  const datas = [
    {
      text: 'Accueil',
      icon: <HomeIcon />,
    },
    {
      text: 'Bibliothèque',
      icon: <MovieIcon />,
    },
  ];
  return (
    <div>
      <div>
        <Header handleClick={handleClick} />
      </div>
      <div>
        <Menu menu={menu} handleClose={handleClose} datas={datas} />
      </div>
      <Banner />
      <Welcome />
      <MainContainer>
        <Categories
          datas={movies}
          categories={categories}
          setActiveCategory={setActiveCategory}
          activeCategory={activeCategory}
        />
        <MoviesList
          datas={currentMovies}
          setMovies={setMovies}
          categories={categories}
          activeCategory={activeCategory}
          loading={loading}
        />
        <Pagination
          moviePerPage={moviePerPage}
          totalPosts={movies.length}
          paginate={paginate}
          setMoviePerPage={setMoviePerPage}
        />
        <Footer />
      </MainContainer>
    </div>
  );
}

export default App;
