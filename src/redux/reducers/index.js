const initialState = {
  weather: {
    content: [],
  },
};

const reducerFunction = (state = initialState, action) => {
  switch (action.type) {
    case "add-city":
      return {
        ...state,
        weather: {
          ...state.weather,
          content: [...state.weather.content, action.payload],
        },
      };

    default:
      return state;
  }
};

export default reducerFunction;
