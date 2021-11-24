const GET_ANIMES_DETAILS = 'anime-facts/animesDetails/GET_ANIMES_DETAILS';
const URL = 'https://anime-facts-rest-api.herokuapp.com/api/v1';
const initialState = {
  animesDetails: [],
};

const getAnimesDetails = (payload) => ({
  type: GET_ANIMES_DETAILS,
  payload,
});

export const fetchAnimesDetails = () => (dispatch) => {
  fetch(URL)
    .then((response) => response.json())
    .then((info) => {
      const { data } = info;
      const promisesArray = data.map((result) => fetch(`${URL}/${result.anime_name}`)
        .then((response) => response.json()));
      return Promise.all(promisesArray);
    }).then((info) => dispatch(getAnimesDetails(info)));
};

const anmiesDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ANIMES_DETAILS:
      return { ...state, animesDetails: action.payload };
    default:
      return state;
  }
};

export default anmiesDetailsReducer;
