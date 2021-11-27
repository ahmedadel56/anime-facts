import React from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { filterAnimes } from '../redux/animes';

const SearchBar = () => {
  const dispatch = useDispatch();
  const filter = (event) => {
    dispatch(filterAnimes(event.target.value));
  };
  return (
    <>

      <Form.Control
        size="lg"
        type="text"
        placeholder="Search for Anime"
        onChange={(event) => {
          filter(event);
        }}
        style={{ marginBottom: '1rem' }}

      />
    </>
  );
};

export default SearchBar;
