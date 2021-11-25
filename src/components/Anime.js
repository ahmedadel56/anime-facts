import React from 'react';
import PropTypes from 'prop-types';
import { Link, Outlet } from 'react-router-dom';

const Anime = (props) => {
  const { id, name, image } = props;
  return (
    <>
      <Link to={`/details/${id}`}>
        <div>
          <img src={image} alt="anime" />
          <h4>
            {name}
          </h4>
        </div>
      </Link>
      <Outlet />
    </>
  );
};

Anime.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Anime;
