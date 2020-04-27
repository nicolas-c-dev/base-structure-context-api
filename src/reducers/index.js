import appReducer from "./app";

const mainReducer = ({ app }, action) => ({
  app: appReducer(app, action),
});

export default mainReducer;
