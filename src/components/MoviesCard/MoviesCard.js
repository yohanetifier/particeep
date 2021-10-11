import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import cineDefaut from '../../assets/cine-defaut-1.jpg';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  Card,
  CardHeader,
  Avatar,
  CardContent,
  CardMedia,
  IconButton,
} from '@mui/material';

const Container = styled(Card)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  background-color: #4c4c4c;
  margin-bottom: 0px;
`;

const TheCard = styled(Card)`
  margin: 5px 5px;
  width: 300px;
  min-width: 200px;
  border: 2px solid transparent;
  transform: scale(1); 
  transition: transform 200ms ease-in-out;
  &:hover {
    box-shadow: 5px 5px 5px grey; 
    transform: scale(1.02);
  }
  & > div {
    background: #c6e2ff;
  }
`;

const Title = styled.span`
  font-weight: bold;
  color: blue; 
`;

const ContainerLikes = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: 20px;
`;
const Counter = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
`;

const Categorie = styled.div`
  height: 40px;
  margin-top: -5px;
  & > p {
    color: blue;
  }
`;

export default function MoviesCard({ datas, setMovies, activeCategory }) {
  let [likes, setLikes] = useState([]);
  let [dislikes, setDislikes] = useState([]);

  function likeMovie(selectedItem) {
    if (!likes.includes(selectedItem)) {
      let filteredArray = datas.filter((movie) => movie !== selectedItem);
      let itemToUpdate = datas.filter((movie) => movie === selectedItem);
      itemToUpdate.map((movie) => {
        if (movie === selectedItem) movie.likes++;
      });
      setMovies([...filteredArray, ...itemToUpdate]);
      likes.push(selectedItem);
    } else {
      let itemToUpdate = datas.filter((movie) => movie === selectedItem);
      itemToUpdate.map((movie) => {
        if (movie === selectedItem) movie.likes--;
      });
      let filteredLikesArray = likes.filter((like) => like !== selectedItem);
      setLikes([...filteredLikesArray]);
    }
  }

  function dislikesMovie(selectedItem) {
    if (!dislikes.includes(selectedItem)) {
      let filteredArray = datas.filter((movie) => movie !== selectedItem);
      let itemToUpdate = datas.filter((movie) => movie === selectedItem);
      itemToUpdate.map((movie) => {
        if (movie === selectedItem) movie.dislikes++;
      });
      setMovies([...filteredArray, ...itemToUpdate]);
      dislikes.push(selectedItem);
    } else {
      let itemToUpdate = datas.filter((movie) => movie === selectedItem);
      itemToUpdate.map((movie) => {
        if (movie === selectedItem) movie.dislikes--;
      });
      let filteredLikesArray = dislikes.filter(
        (dislike) => dislike !== selectedItem
      );
      setDislikes([...filteredLikesArray]);
    }
  }

  function handleDelete(selectedItem) {
    const filteredArray = datas.filter((item) => item !== selectedItem);
    setMovies(filteredArray);
  }

  return (
    <Container>
      {datas.map((movie) =>
        movie.category === activeCategory || !activeCategory ? (
          <TheCard key={movie.id}>
            <CardHeader
              title={<Title>{movie.title}</Title>}
              avatar={<Avatar>{movie.category.charAt(0).toUpperCase()}</Avatar>}
              action={
                <IconButton>
                  <DeleteIcon
                    onClick={() => handleDelete(movie)}
                    color="black"
                  />
                </IconButton>
              }
            />
            <CardMedia component="img" height="194" image={cineDefaut} />
            <CardContent>
              <Categorie>
                <p>Catégorie: {movie.category}</p>
              </Categorie>
              <ContainerLikes>
                <Counter>
                  <IconButton
                    onClick={() => likeMovie(movie)}
                    disabled={dislikes.includes(movie)}
                  >
                    {likes.includes(movie) ? (
                      <ThumbUpIcon color="success" />
                    ) : (
                      <ThumbUpOffAltIcon />
                    )}
                  </IconButton>
                  <p>{movie.likes}</p>
                </Counter>
                <Counter>
                  <IconButton
                    onClick={() => dislikesMovie(movie)}
                    disabled={likes.includes(movie)}
                  >
                    {dislikes.includes(movie) ? (
                      <ThumbDownIcon color="error" />
                    ) : (
                      <ThumbDownOffAltIcon />
                    )}
                  </IconButton>
                  <p>{movie.dislikes}</p>
                </Counter>
              </ContainerLikes>
            </CardContent>
          </TheCard>
        ) : null
      )}
    </Container>
  );
}

MoviesCard.propTypes = {
  datas: PropTypes.arrayOf(PropTypes.object).isRequired,
  setMovies: PropTypes.func,
  categories: PropTypes.arrayOf(PropTypes.string),
  activeCategory: PropTypes.string,
};
