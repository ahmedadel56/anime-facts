import anmiesDetailsReducer, { GET_ANIMES_DETAILS } from '../redux/animesDetails';

describe('Redux anmies Details reducer tests', () => {
  test('Details reducer initial state test', () => {
    expect(anmiesDetailsReducer(undefined, {})).toEqual({ animesDetails: [] });
  });

  test('Details reducer fetch test', () => {
    const action = {
      type: GET_ANIMES_DETAILS,
      payload: [{ id: 'test' }],
    };
    expect(anmiesDetailsReducer({ animesDetails: {} }, action)).toEqual({
        animesDetails: [{ id: 'test' }],
    });
  });
});
