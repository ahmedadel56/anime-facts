import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAnimes } from '../redux/animes';
import Anime from './Anime';

const AnimesList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAnimes());
  }, []);
  const AnmiesState = useSelector((state) => state.anmiesReducer.animes);

  return (
    <div>
      {AnmiesState.map((anime) => (
        <Anime
          key={anime.anime_name}
          id={anime.anime_id}
          name={anime.anime_name}
          image={anime.anime_img}
        />
      ))}
    </div>
  );
};

export default AnimesList;
