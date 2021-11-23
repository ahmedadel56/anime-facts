import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Anime = (props) => {
  const { image, name } = props;
  return (
    <>
      <Link to={`/details/${name}`}>
        <div>
          <img src={image} alt="anime" />
          <h4>
            { name}
          </h4>
        </div>
      </Link>
    </>
  );
};

Anime.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Anime;
