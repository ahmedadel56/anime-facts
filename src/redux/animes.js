const GET_ANIMES = 'anime-facts/animes/GET_ANIMES';
const FILTER_ANIMES = 'anime-facts/animes/FILTER_ANIMES';
const URL = 'https://anime-facts-rest-api.herokuapp.com/api/v1';
const initialState = {
  animes: [],
};

const getAnimes = (payload) => ({
  type: GET_ANIMES,
  payload,
});

export const fetchAnimes = () => (dispatch) => {
  fetch(URL)
    .then((response) => response.json())
    .then((info) => {
      const { data } = info;
      return Promise.all(data);
    }).then((info) => dispatch(getAnimes(info)));
};

export const filterAnimes = (value) => (dispatch) => {
  dispatch({ type: FILTER_ANIMES, payload: value });
};

const anmiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ANIMES:
      return { ...state, animes: action.payload, mutation: action.payload };
    case FILTER_ANIMES:
      return {
        ...state,
        animes: state.mutation.filter((anime) => anime.anime_name
          .toLowerCase().includes(action.payload.toLowerCase())),
      };
    default:
      return state;
  }
};

export default anmiesReducer;
