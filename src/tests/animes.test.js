import anmiesReducer, { GET_ANIMES, FILTER_ANIMES } from '../redux/animes';

describe('animes reducer tests: ', () => {
  test('animes reducer initial state test', () => {
    expect(anmiesReducer(undefined, {})).toEqual({ animes: [] });
  });
  test('Animes reducer fetch test', () => {
    const action = {
      type: GET_ANIMES,
      payload: [{ id: 'test' }],
    };
    expect(anmiesReducer({ animes: [], mutation: [] }, action)).toEqual({
      animes: [{ id: 'test' }],
      mutation: [{ id: 'test' }],
    });
  });

  test('Collection reducer filter test', () => {
    const action = {
      type: FILTER_ANIMES,
      payload: 'test',
    };
    expect(anmiesReducer({ animes: [], mutation: [{ anime_name: 'test' }, { anime_name: 'some other text' }] }, action)).toEqual({
      animes: [{ anime_name: 'test' }],
      mutation: [{ anime_name: 'test' }, { anime_name: 'some other text' }],
    });
  });
});
