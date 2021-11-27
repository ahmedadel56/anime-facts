import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import { BsFillSkipBackwardCircleFill } from 'react-icons/bs';
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
    <Container style={{ minHeight: '100vh' }}>
      {filteredAnime.map((element) => (
        <div key={element.key}>
          <Row>
            <Col md={3}>
              <Link to="/">
                <h1>
                  <BsFillSkipBackwardCircleFill style={{ color: 'white' }} />
                </h1>
              </Link>
            </Col>
            <Col md={6}>
              <img src={element.img} alt="Anime Name" />
            </Col>
          </Row>
          <Row>
            <Col style={{
              display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '2rem 0', color: 'white',
            }}
            >
              <h2>Total Facts : </h2>
              <h3>{element.total_facts}</h3>
            </Col>
          </Row>
          <Container style={{ border: '0.2rem solid white', borderRadius: '30px 30px 0 0' }}>

            {element.data.map((fact) => (
              <Row key={fact.fact_id} style={{ borderBottom: '2px solid white' }}>
                <Col md={4} style={{ textAlign: 'end', color: 'white', fontWeight: '800' }}>
                  <h5>
                    {' '}
                    {'Fact number '}
                    {fact.fact_id}
                    { ': '}
                  </h5>
                </Col>
                <Col>
                  <p style={{ fontSize: '20px', fontWeight: '500' }}>
                    {fact.fact}
                  </p>
                </Col>
              </Row>
            ))}
          </Container>
        </div>
      ))}
    </Container>
  );
};

export default DetailsPage;
