import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import DetailsPage from '../components/DetailsPage';
import Header from '../components/Header';
import AnimesList from '../components/AnimesList';
import store from '../redux/configureStore';
import Anime from '../components/Anime';
import SearchBar from '../components/SearchBar';

const MockObj = {
  name: 'test',
  image: 'imange',
  id: 123,
};

describe('Detailed Anime component', () => {
  test('matches Header component snapshot', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Header />
        </BrowserRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('render filterd Anime', () => {
    const component = renderer
      .create(
        <Provider store={store}>
          <DetailsPage />
        </Provider>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
  test('render filterd Anime', () => {
    const component = renderer
      .create(
        <Provider store={store}>
          <AnimesList />
        </Provider>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  test('render filterd Anime', () => {
    const component = renderer
      .create(
        <BrowserRouter>
          <Anime
            key={MockObj.id}
            id={MockObj.id}
            name={MockObj.name}
            image={MockObj.image}
          />
        </BrowserRouter>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  test('render Search Bar', () => {
    const component = renderer
      .create(
        <Provider store={store}>
          <SearchBar />
        </Provider>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
