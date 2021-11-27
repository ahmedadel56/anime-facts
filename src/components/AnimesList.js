import React, { useEffect } from 'react';
/* eslint-disable react/jsx-props-no-spreading */
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Col, Container, Row, Tooltip, OverlayTrigger,
} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAnimes } from '../redux/animes';
import Anime from './Anime';
import Header from './Header';
import SearchBar from './SearchBar';

const AnimesList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAnimes());
  }, []);
  const AnmiesState = useSelector((state) => state.anmiesReducer.animes);

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Click To See Facts
    </Tooltip>
  );
  return (
    <Container style={{ minHeight: '100vh' }}>
      <Header />
      <SearchBar />
      <Row>
        {AnmiesState.map((anime) => {
          if (anime.length !== 0) {
            return (
              <OverlayTrigger
                placement="top"
                delay={{ show: 100, hide: 400 }}
                overlay={renderTooltip}
                key={anime.key}
              >
                <Col key={anime.key} xs={6} sm={4} md={6} lg={4}>
                  <Anime
                    key={anime.anime_name}
                    id={anime.anime_id}
                    name={anime.anime_name}
                    image={anime.anime_img}
                  />
                </Col>
              </OverlayTrigger>
            );
          }
          return null;
        })}
      </Row>
    </Container>
  );
};

export default AnimesList;
