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
        <div className="div-detailed-card" key={element.key}>
          <div className="detailed-card">
            <div className="row">
              <div className="images-detailed col-6">
                <img src={element.img} className="img-thumbnail" alt="Anime Name" />
              </div>
              <div className="name-p col-6 mr-2 mt-5 pt-5 mr-3">
                <h4 className="card-title text-uppercase p-pokemon-card p-detailed-name">
                  Total Facts :
                  {' '}
                  {element.total_facts}
                </h4>
              </div>
              <div>
                {element.data.map((fact) => (
                  <div key={fact.fact_id}>
                    <h5 className="p-d-title col-6">
                      {' '}
                      {'Fact number '}
                      {fact.fact_id}
                    </h5>
                    <p className="p-detailed col-6 ">
                      {fact.fact}
                      <i className="fa fa-arrow-circle-o-right px-2" aria-hidden="true" />
                    </p>

                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DetailsPage;
