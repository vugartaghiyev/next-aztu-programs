export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FIRST_TOKEN":
      return {
        ...state,
        first_token: action.payload,
      };
    default:
      return state;
  }
};
