import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { fetchAnimesDetails } from '../redux/animesDetails';
/* eslint-disable camelcase */

const DetailsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAnimesDetails());
  }, []);
  const animessState = useSelector((state) => state.anmiesDetailsReducer.animesDetails);
  const { key } = useParams();
  const filteredAnime = animessState.slice(key - 1, key);
  return (
    <div className="details">
      <Link to="/" className="col-3">
        <h1 className="arrow-left">
          {'<'}
        </h1>
      </Link>
      {filteredAnime.map((element) => (
        <div key={element.key}>
          <img src={element.img} alt="Anime Name" />
          <h2>
            Total Facts :
            {' '}
            {element.total_facts}
          </h2>
          <div>
            {element.data.map((fact) => (
              <div key={fact.fact_id}>
                <strong>
                  {' '}
                  {fact.fact_id}
                </strong>
                <p>{fact.fact}</p>

              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DetailsPage;
