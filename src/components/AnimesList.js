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
          key={anime.anime_id}
          facts={anime.total_facts}
          image={anime.img}
        />
      ))}
    </div>
  );
};

export default AnimesList;
