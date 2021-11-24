import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { useParams } from 'react-router';
import { fetchAnimesDetails } from '../redux/animesDetails';
/* eslint-disable camelcase */

const DetailsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAnimesDetails());
  }, []);
  const animessState = useSelector((state) => state.anmiesDetailsReducer.animesDetails);
  // const { image } = useParams();

  // const filteredAnime = animessState.filter((anime) => anime.img === image);
  return (
    <div className="details">
      {animessState.map((element) => (
        <div key={element.img}>
          <h2>
            {element.total_facts}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default DetailsPage;
