import React from "react";

import { StateProvider } from "./state";
import mainReducer from "./reducers";

const App = () => {
  const initialState = {};

  return (
    <StateProvider initialState={initialState} reducer={mainReducer}>
      App content ...
    </StateProvider>
  );
};

export default App;
