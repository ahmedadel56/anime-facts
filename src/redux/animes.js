const GET_ANIMES = 'anime-facts/animes/GET_ANIMES';
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
      const promisesArray = data.map((result) => fetch(`${URL}/${result.anime_name}`)
        .then((response) => response.json()));
      return Promise.all(promisesArray);
    }).then((info) => dispatch(getAnimes(info)));
};

const anmiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ANIMES:
      return { ...state, animes: action.payload };
    default:
      return state;
  }
};

export default anmiesReducer;
