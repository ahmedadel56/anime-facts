import React from 'react';
import PropTypes from 'prop-types';
import { Link, Outlet } from 'react-router-dom';
import { Image, Card } from 'react-bootstrap';

const Anime = (props) => {
  const { id, name, image } = props;
  return (
    <>
      <Link to={`/details/${id}`}>
        <Card style={{ background: 'inherit', marginBottom: '2rem' }}>
          <Image src={image} alt="anime" />
          <Card body>
            <Card text style={{ border: 'none', textAlign: 'center' }}>
              {name}
            </Card>

          </Card>
        </Card>
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
