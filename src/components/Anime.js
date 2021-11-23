import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Anime = (props) => {
  const { facts, image } = props;
  return (
    <>
      <Link to={`/details/${facts}`}>
        <div>
          <img src={image} alt="anime" />
          <h4>
            { facts}
          </h4>
        </div>
      </Link>
    </>
  );
};

Anime.propTypes = {
  facts: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default Anime;
