import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "reducers";
import reduxPromise from 'redux-promise';

const Root = ({children,intitialState = {}}) => {
  const store = createStore(
    reducers,
    intitialState,
    applyMiddleware(reduxPromise)
  )

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

export default Root;
