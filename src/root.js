import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "reducers";

const Root = ({children,intitialState = {}}) => {
  return (
    <Provider store={createStore(reducers, intitialState)}>
      {children}
    </Provider>
  );
};

export default Root;
