import { types } from '../actions/weatherDataActions';

const getInitialState = () => ({
  data: undefined,
});

export default (state = getInitialState(), action) => {
  switch (action.type) {
    case types.FETCH_WEATHER_DATA_RESPONSE:
      return {
        ...state,
        data: action.data,
      };

    default: {
      return state;
    }
  }
};
