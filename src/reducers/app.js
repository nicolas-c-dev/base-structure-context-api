const appReducer = (state, action) => {
  switch (action.type) {
    case "setLoader":
      return {
        ...state,
        loader: action.newLoaderState,
      };

    default:
      return state;
  }
};

export default appReducer;
